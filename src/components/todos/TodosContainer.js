import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoContainer extends Component {

  render() {
    console.log(state.todos)

    renderTodos = () => {
        this.props.todos.map((todo, id) => <Todo key={id} text={todo.text} />)
    }

    return(
      <div>
        {this.renderTodos}
      </div>
    )
  }
}

export default connect(state => todos: state.todos)(TodoContainer)
