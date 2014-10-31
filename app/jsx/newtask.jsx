/** @jsx React.DOM */
'use strict';

define([], function() {
    return React.createClass({
        handleSubmit: function(e) {
            e.preventDefault();
            var summary = this.refs.summary.getDOMNode().value.trim();
            var content = this.refs.content.getDOMNode().value.trim();
            if (!summary || !content) {
                return;
            }
            this.props.onTaskSubmit({summary:summary, content: content});
            this.refs.summary.getDOMNode().value = "";
            this.refs.content.getDOMNode().value = "";
            return;
        },
        handleTaskSubmit: function(task) {
            var comm
        render: function() {
            return (
                <form className="newtaskform" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Task Summary "name="formsummary" ref="summary" />
                <textarea name="formcontent" placeholder="Task Content" ref="content"  />
                <input type="submit" value="Save Task" />
                </form>
            );
        }
    });
});
