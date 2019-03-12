// Get todos from the store for display
import React, { Component } from "react"
import { connect } from "react-redux"
import Todo from "./Todo"

class TodosContainer extends Component {
	// Map over the todos received from Redux and  pass the value of each todo into a Todo child component 
	// Todo in this case doesn't have any Redux related code, and is a regular, functional component.
	renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

	render() {
		
		return(
			<div>
				{this.renderTodos()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}
// the mapStateToProps function is the first argument passed to connect
export default connect(mapStateToProps)(TodosContainer)