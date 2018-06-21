import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <li key={this.props.index}>{this.props.text}</li>
    );
  }
};

export default Todo;
