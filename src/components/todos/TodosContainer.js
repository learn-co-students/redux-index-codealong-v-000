import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo'


class TodoContainer extends Component {

  showList = () => {
    return this.props.todos.map(function (todo, id) {
      return <Todo key={id} text={todo} />
    })
  }

  render() {
    return(
      <div>
        <h2>Todo List:</h2>
          <ol>
          {this.showList()}
          </ol>
      </div>
    )
  }
}

  let stateProps = (state) => {
    return {todos: state.todos}
  }

export default connect(stateProps)(TodoContainer);
