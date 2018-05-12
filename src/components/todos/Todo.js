import React, { Component } from 'react';

class Todo extends Component {
//render out the props text into an li element that is passed in from the map function in todos 
  render() {
    return(
      <li>{this.props.text}</li>
    );
  }
};

export default Todo;
