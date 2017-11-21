import React, { Component } from 'react';
import Todo from './Todo';

// index creates store
// index passes store to <App /> as props
//   <App /> passes store to <Todos /> as props
//     <Todos /> uses info from store, to pass store attributes to <Todo />
//       <Todo /> represents how to render an invidivual <Todo /> to the DOM
//       <Todos /> collects the list of <Todo /> li items into a variable called 'todos'
//       <Todos /> returns the list of <Todo /> li items 

class Todos extends Component {

  render() {
    const todos = this.props.store.getState().todos.map((todo, index) => {
    return <Todo key={index} text={todo.text} /> });
 
    return (
    <ul>
     {todos}
    </ul>
    ) 
  }
};

export default Todos;
