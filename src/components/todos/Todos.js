import React, { Component } from 'react';

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo key={index} text={todo.text} />
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
