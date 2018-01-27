import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <div>
        <li style={{border: '1px solid red'}}>{this.props.text}</li>
      </div>
    );
  }
};

export default Todo;
