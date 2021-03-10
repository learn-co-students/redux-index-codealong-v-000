//write a functional component that returns an li displaying props:
import React from 'react'
 
const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;