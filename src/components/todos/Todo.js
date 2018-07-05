import React, { Component } from 'react';

class Todo extends Component {
   
  render() {
    const { text } = this.props
    return(
      <div>
        <li>{text}</li>
      </div>
    );
  }
};

export default Todo;
