import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

class TodosContainer extends React.Component {

  render() {

    let renderTodos = this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    
    return(
      <div>
        {renderTodos}
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
