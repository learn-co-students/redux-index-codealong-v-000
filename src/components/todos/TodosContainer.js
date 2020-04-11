import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosContainer = ({ todos }) => {
  const renderTodos = () =>
    todos.map((todo, id) => <Todo key={id} text={todo} />);
  return <div>{renderTodos()}</div>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosContainer);
