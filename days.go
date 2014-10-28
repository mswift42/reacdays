package days

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

type Task struct {
	Id        int64     `json:"id" datastore:"-"`
	Summary   string    `json:"summary"`
	User      string    `json:"user"`
	Content   string    `json:"content" datastore:",noindex"`
	Scheduled time.Time `json:"scheduled"`
	Done      string    `json:"done"`
}

func tasklistkey(c appengine.Context) *datastore.Key {
	return datastore.NewKey(c, "Task", "default_tasklist", 0, nil)
}

func (t *Task) key(c appengine.Context) *datastore.Key {
	if t.Id == 0 {
		return datastore.NewIncompleteKey(c, "Task", tasklistkey(c))
	}
	return datastore.NewKey(c, "Task", "", t.Id, tasklistkey(c))
}

// save - save Task in appengines Datastore.
func (t *Task) save(c appengine.Context) (*Task, error) {
	k, err := datastore.Put(c, t.key(c), t)
	if err != nil {
		return nil, err
	}
	t.Id = k.IntID()
	return t, nil
}

func (t *Task) delete(c appengine.Context) error {
	return datastore.Delete(c, t.key(c))
}

func decodeTask(r io.ReadCloser) (*Task, error) {
	defer r.Close()
	var task Task
	err := json.NewDecoder(r).Decode(&task)
	return &task, err
}

func listTasks(c appengine.Context) ([]Task, error) {
	tasks := []Task{}
	keys, err := datastore.NewQuery("Task").Ancestor(tasklistkey(c)).Order("-Done").Order("Scheduled").GetAll(c, &tasks)
	if err != nil {
		return nil, err
	}
	for i := 0; i < len(tasks); i++ {
		tasks[i].Id = keys[i].IntID()
	}
	return tasks, nil
}

func init() {
	http.HandleFunc("/tasks", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	val, err := handleTasks(c, r)
	if err == nil {
		json.NewEncoder(w).Encode(val)
	}
	if err != nil {
		c.Errorf("Task error : %#v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func handleTasks(c appengine.Context, r *http.Request) (interface{}, error) {
	switch r.Method {
	case "POST":
		task, err := decodeTask(r.Body)
		if err != nil {
			return nil, err
		}
		return task.save(c)
	case "GET":
		return listTasks(c)
	case "DELETE":
		task, err := decodeTask(r.Body)
		if err != nil {
			return nil, err
		}
		return nil, task.delete(c)
	}
	return nil, fmt.Errorf("method not implemented")
}
