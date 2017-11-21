import React, { Component } from 'react';

export default class Todo extends Component {

  handleClick(e){
    e.target.className='blue'
  }

  render() {
    return(
      <div>
        <li><button onClick={(e)=> this.handleClick(e)} className='red'>{this.props.text}</button></li>
      </div>
    );
  }
};

// index creates store
// index passes store to <App /> as props
//   <App /> passes store to <Todos /> as props
//     <Todos /> uses info from store, to pass store attributes to <Todo />
//       <Todo /> represents how to render an invidivual <Todo /> to the DOM
//       <Todos /> collects the list of <Todo /> li items into a variable called 'todos'
//       <Todos /> returns the list of <Todo /> li items 

