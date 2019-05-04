import React from 'react'

//where is it getting props from? Is this the parent?
//What is props?
const Todo = props => {
  return (
    <li>{props.text}</li>
  )
}

export default Todo
