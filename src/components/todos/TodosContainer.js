import React, { Component } from 'react';
import { connect } from 'react-redux'
 
class TodosContainer extends Component {
 
 
 renderTodos = () =>{
     //Get all the todos (they were passed to the props of this component by connect())
     //Then, map them using the object and its index as an id to create a new to-do element from the to-do component
     this.props.todos.map((todo,id) => <Todo key={id} text={todo} />)
 }
 
  render() {
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
 
export default connect(mapStateToProps)(TodosContainer);