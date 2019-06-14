import React from 'react'

const Todo = props => {
  console.log('this is props', props)
  return (
    <li>{props.text}</li>
  );
};

export default Todo;
