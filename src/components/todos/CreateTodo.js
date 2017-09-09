import React, { Component } from 'react';
import Todos from './Todos';

class CreateTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    });
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CreateTodo;
