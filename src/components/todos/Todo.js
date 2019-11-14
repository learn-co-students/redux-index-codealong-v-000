//  Creating a presentational component.

import React from 'react'
  
const Todo = props => {
    return (
        <li>
            {props.text}
        </li>
    )
}
//  Then we IMPORT this Presentational Componet TodosContainer.js. Then we USe
// .map to iterate over in in TodosCcontainer.js
export default Todo;