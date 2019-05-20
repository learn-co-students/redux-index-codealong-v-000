import React from 'react'

// call this from a map function in TodosContainer
const Todo = props => {
  return (
    <li>{props.text}</li>
  )
}

export default Todo;
