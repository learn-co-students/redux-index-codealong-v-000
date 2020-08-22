// 1. To start, we'll have each todo rendered as a list item. 
    // Inside the ./src/components/ folder, create a file Todo.js. 
    // Inside it, write a functional component that returns an li displaying props

import React from 'react'
 
const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;