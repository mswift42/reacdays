/** @jsx React.DOM */
'use strict';

define([], function() {
    var Task = React.createClass({
        render: function() {
            return (
                <div className="task">
                <div className="tstatus">
                <h3 className="taskstatus">
                {this.props.status}
                 </h3>
                </div>
                <div className="tsummary">
                {this.props.summary}
                 </div>
                <div className="tcontent">
                {this.props.content}
                 </div>
                <div className="tscheduled">
                {this.props.scheduled}
                 </div>
                </div>
            );
        }
    });
    var TaskBox = React.createClass({
        loadTasksFromServer: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        handleTaskSubmit: function(task) {
            var tasks = this.state.data;
            tasks.push(task);
            this.setState({data: tasks}, function() {
                $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    type: 'POST',
                    data: task,
                    success: function(data) {
                        this.setState({data: data});
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });
            });
        },
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            this.loadTasksFromServer();
        },
        render: function() {
            return (
                <div className="taskBox">
                <h1>Tasks</h1>
                <Tasklist data={this.state.data} />
                <TaskForm onTaskSubmit={this.handleTaskSubmit} />
                </div>
            );
        }
    });
    var TaskList = React.createClass({
        render: function() {
            var taskNodes = this.props.data.map(function(task, index) {
                return (
                    <Task status={task.status} key={index}>
                    {task.content}
                    </Task>
                );
            });
            return (
                <div className="taskList">
                {taskNodes}
                </div>
            );
        }
    });
    var TaskForm = React.createClass({
        handleSubmit: function(e) {
            e.preventDefault();
            var status = "TODO";
            var summary = this.refs.summary.getDOMNode().value.trim();
            var content = this.refs.content.getDOMNode().value.trim();
            if (!summary || !content) {
                return;
            }
            this.props.onTaskSubmit({summary: summary, content: content});
            this.refs.summary.getDOMNode().value = '';
            this.refs.content.getDOMNode().value = '';
            return;
        },
        render: function() {
            return (
                <form className="taskForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="task summary" ref="summary" />
                <textarea placeholder="task content" ref="conteent" />
                <input type="submit" value="Save Task" />
                </form>
            );
        }
    });
    React.renderComponent(
        <TaskBox url="/tasks" />,
        document.getElementById('newtaskform')
    );
});
