import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} />
    });

    return(
      <ul style={{border: '1px solid yellow', padding: 5}}>
        {todos}
      </ul>
    );
  }
};

export default Todos;
