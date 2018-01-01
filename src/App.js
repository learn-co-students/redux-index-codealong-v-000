import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todos from './components/todos/Todos'

// passing the store 2 todos compo as prop -> todos.js
class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <Todos store={this.props.store} />
      </div>
    );
  }
}

export default App;
