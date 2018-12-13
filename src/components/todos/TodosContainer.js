import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, i) => {return (<Todo text={todo} key={i} />)})

  render() {
    console.log('worked');
    return (
      <div>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(TodosContainer);
