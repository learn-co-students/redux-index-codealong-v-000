import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo'

// CreateTodo handles the creation of todos, so we need a component <TodosContainer />, that will use the data from the store to reference the list of Todos.

// We will use a presentational component to present individual todos, <Todo/>.

class TodosContainer extends React.Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)


  render() {
    // console.log("TEST FROM TodosContainer")
    // const todos = this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    return(
      <div>
      {this.renderTodos()}
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
