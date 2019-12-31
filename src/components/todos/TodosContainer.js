import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodosContainer extends Component {
  renderTodos() {
    return this.props.todos.map(function(todo, id) {
      return <Todo key={id} text={todo} />;
    });
  }

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosContainer);
