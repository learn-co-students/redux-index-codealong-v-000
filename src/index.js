import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo'
import createStore from './createStore'

let store = createStore(manageTodo)

export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.dispatch({type: '@@INIT'})

// index creates store
// index passes store to <App /> as props
//   <App /> passes store to <Todos /> as props
//     <Todos /> uses info from store, to pass store attributes to <Todo />
//       <Todo /> represents how to render an invidivual <Todo /> to the DOM
//       <Todos /> collects the list of <Todo /> li items into a variable called 'todos'
//       <Todos /> returns the list of <Todo /> li items 
