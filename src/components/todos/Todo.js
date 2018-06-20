import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
};

export default Todo;
