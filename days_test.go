package days

import (
	"appengine/aetest"
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
