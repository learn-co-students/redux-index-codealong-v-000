import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, index) => <Todo key={index} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
