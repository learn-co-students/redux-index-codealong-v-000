
import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
};

export default Todo;

// import React, { Component } from 'react';
//
// class Todo extends Component {
//
//   render() {
//     return(
//       <div>
//         Our Todo
//       </div>
//     );
//   }
// };
//
// export default Todo;
