// ./src/components/todos/TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodosContainer extends Component {
	renderTodos = () => this.props.todos.map((todo, id) => <Todo text={todo} key={id} />);

	render() {
		return <div>{this.renderTodos()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log(state.todos);

	return { todos: state.todos };
};

export default connect(mapStateToProps)(TodosContainer);
