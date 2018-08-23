// Note : This component gets the todos from the store

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'


class TodosContainer extends Component {
 
    // Note : Function to map the todos to the Todo component
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    
    render() {
      console.log('show todos : ', this.props.todos)
        return(
          <div>
            {this.renderTodos()}
          </div>
        );
    }
};
 
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
// Note : Only needs mapStateToProps because getting state data, not doing any dispatching
export default connect(mapStateToProps)(TodosContainer);
