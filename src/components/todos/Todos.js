import React, { Component } from 'react';
import ToDo from './Todo'

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <ToDo text={todo.text} key={index}/>
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
