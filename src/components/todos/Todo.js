import React from 'react'
//3.presentational component

const Todo = props => {
    return(
        <li>{props.text}</li>
    )
}

export default Todo;