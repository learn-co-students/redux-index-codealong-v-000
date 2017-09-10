import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

  render() {
    return(
      <li>
        {this.props.text}
      </li>
    );
  }
};

Todo.defaultProps = {
  text: ''
}

Todo.propTypes = {
  text: PropTypes.string
}

export default Todo;
