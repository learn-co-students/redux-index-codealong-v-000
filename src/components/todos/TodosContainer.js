import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {
  
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={todo.id} text={todo} />)

  render() {
    return (
      <div> {this.renderTodos()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
// we aren't worried about dispatching actions here, only getting state from Redux so we'll
// need to write out a mapStateToProps() funciton
//and include it as an argument for connect 