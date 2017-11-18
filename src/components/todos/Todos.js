import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  render() {
//tell each individual Todo about the text that it is rendering
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
