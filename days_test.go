package days

import (
	"appengine/aetest"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"
)

func genTask(day, summary string, id int64) (*Task, error) {
	layout := "02/01/2006"
	t, err := time.Parse(layout, day)
	if err != nil {
		return nil, err
	}
	return &Task{Summary: summary, Scheduled: t, Id: id}, nil
}

func TestTask(t *testing.T) {
	t1, err := genTask("31/01/2014", "first task", 123)
	if err != nil {
		t.Fatal(err)
	}
	t2, err := genTask("30/01/2014", "second task", 124)
	if err != nil {
		t.Fatal(err)
	}
	if t1.Id != 123 {
		t.Error("Expected id 123, got: ", t1.Id)
	}
	if t2.Id != 124 {
		t.Error("Expected id 124, got: ", t2.Id)
	}
}

func TestTaskListKey(t *testing.T) {
	c, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer c.Close()
	k1 := tasklistkey(c)
	k2 := tasklistkey(c)
	if !k1.Equal(k2) {
		t.Error("Expexted keys to be equal.")
	}
}

func TestSaveAndList(t *testing.T) {
	c, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	t1, err := genTask("31/01/2014", "first task", 123)
	if err != nil {
		t.Fatal(err)
	}
	t2, err := genTask("30/06/2014", "second task", 222)
	if err != nil {
		t.Fatal(err)
	}
	t3, err := genTask("31/10/2014", "third task", 333)
	if err != nil {
		t.Fatal(err)
	}
	t1saved, err := t1.save(c)
	if err != nil {
		t.Fatal(err)
	}
	if t1saved.Id != 123 {
		t.Error("Expected id == 123, got: ", t1saved.Id)
	}
	t2saved, err := t2.save(c)
	if err != nil {
		t.Fatal(err)
	}
	t3saved, err := t3.save(c)
	if err != nil {
		t.Fatal(err)
	}
	tasks, err := listTasks(c)
	if err != nil {
		t.Fatal(err)
	}
	if t2saved.Id != tasks[1].Id {
		t.Error("Expected id of second task to be == of saved 2nd task")
	}
	if t3saved.Id != tasks[2].Id {
		t.Error("Expected id of 3rd task to be == saved 3rd task")
	}
}

func TestDecodeTask(t *testing.T) {

	var testjson = `{"summary":"first summary" , "id": 123}`
	t1, err := genTask("31/01/2014", "first summary", 123)
	if err != nil {
		t.Fatal(err)
	}
	b, nerr := json.Marshal(t1)
	if nerr != nil {
		t.Fatal(err)
	}
	var t2 Task
	unerr := json.Unmarshal(b, &t2)
	if unerr != nil {
		t.Fatal(err)
	}
	if t2.Id != 123 {
		t.Error("Expected unmarschalled task id to be 123, got: ", t2.Id)
	}
	dec, err := decodeTask(ioutil.NopCloser(strings.NewReader(testjson)))
	if err != nil {
		t.Fatal(err)
	}
	if dec.Id != 123 {
		t.Error("Expected decoded tasks id to be 123, got: ", dec.Id)
	}
}

func TestHandler(t *testing.T) {
	c, err := aetest.NewContext(nil)
	t1, err := genTask("31/01/2014", "first task", 123)
	if err != nil {
		t.Fatal(err)
	}
	if err != nil {
		t.Fatal(err)
	}
	_, nerr := t1.save(c)
	if nerr != nil {
		t.Fatal(err)
	}
	resp := httptest.NewRecorder()
	uri := "/tasks"
	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		t.Fatal(err)
	}
	http.DefaultServeMux.ServeHTTP(resp, req)
	if p, err := ioutil.ReadAll(resp.Body); err != nil {
		t.Fail()
	} else {
		if !strings.Contains(string(p), "first task") {
			t.Errorf("header response doesn't match :\n%s", p)
		}
	}
}
