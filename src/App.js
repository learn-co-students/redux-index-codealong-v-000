import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todos from './components/todos/Todos'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h4>TodoToday:</h4>
				<Todos store={this.props.store} />
				<CreateTodo store={this.props.store} />
			</div>
		);
	}
}

export default App;
