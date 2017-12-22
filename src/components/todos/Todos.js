import React, { Component } from 'react';

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => { //passing store to Todos component as a prop, access arrays of todos from store.getState(), call map to return array of React elements
      return <Todo text={todo.text} key={index} /> //used Todo component
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
