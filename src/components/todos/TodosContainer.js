import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo.js'
//OR import Todo from './Todo'
class TodosContainer extends Component {

  render() {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    return(
      <div>{renderTodos()}</div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
