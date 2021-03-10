import React from 'react';

const Todo = props => {
  return (
    <li id={`"todo-${props.key}"`}>{props.text}</li>
  )
}

export default Todo;