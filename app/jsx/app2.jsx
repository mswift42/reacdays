/** @jsx React.DOM */
'use strict';
define([], function () {
    var TaskList =  React.createClass({
        loadTasksFromServer: function() {
            $.ajax({
                url: "/tasks",
                method: "GET",
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
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
                <div className="tasklist">
                <p>Hier kommen tasks hin</p>
                </div>
            );
        }
    });
    return TaskList;
});