import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <li key={this.props.key}>{this.props.text}</li>
    );
  }
};

export default Todo;
