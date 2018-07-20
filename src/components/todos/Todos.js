import React, { Component } from 'react';
import Todo from './Todo.js'
class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index}/>
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
