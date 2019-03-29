import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {
  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <div>
        {todos.map((todo, id) => 
          <Todo key={id} text={todo} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)