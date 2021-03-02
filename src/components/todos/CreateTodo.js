<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: "",
    });
  };

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add todo</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
=======
import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div></div>
>>>>>>> 85f9170772ae665ee4a029179af4dd6eab747e7d
    );
  }
}

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({
  addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
});
=======
const mapStateToProps = state => {
 return {
   todos: state.todos
 }
}
>>>>>>> 85f9170772ae665ee4a029179af4dd6eab747e7d

export default connect(mapStateToProps)(TodosContainer);