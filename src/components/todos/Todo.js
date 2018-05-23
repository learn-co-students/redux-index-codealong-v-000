import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <li>{this.props.item}</li>
    );
  }
};

export default Todo;
