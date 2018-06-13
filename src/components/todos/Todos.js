
import React, { Component } from 'react';
import Todo from './Todo'; /* code changed */

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} /> /* code changed */
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;



// import React, { Component } from 'react';
//
// class Todos extends Component {
//
//   render() {
//
//     const todos = this.props.store.getState().todos.map((todo, index) => {
//       return <li key={index}>{todo.text}</li>
//     });
//
//     return(
//       <ul>
//         {todos}
//       </ul>
//     );
//   }
// };
//
// export default Todos;
