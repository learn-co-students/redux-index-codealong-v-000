import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'

class App extends Component {
  render() {
    // Notice that we're not passing anything to
    // CreateTodo or TodosContainer. That's a nice
    // feature of using Redux.
    return (
      <div className="App">
        <CreateTodo />
        <TodosContainer />
      </div>
    );
  }
}

// Notice that App does not need to be connected to 
// Redux. 
export default App;
