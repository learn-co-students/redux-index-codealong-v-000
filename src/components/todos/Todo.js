import React from 'react';

const Todo = props => {
    console.log('Todo', props)
    // const todos = props.todos.map((todo, idx) => {
    //     return <li key={idx}>{ todo }</li>
    // })

    return (
        <div>
            <li>
                { props.todo }
            </li>
        </div>
    )
}

export default Todo;