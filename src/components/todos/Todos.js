import React, { Component } from 'react';
import Todo from './Todo';

//we have passed our store to the Todos component as a prop. Then we access the array of todos by calling store.getState(), and calling map to return an array of React elements, each of type li.

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} />
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
