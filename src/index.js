import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageTodo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// In some labs, the store is passed in twice - once in Provider and once in App. Why is that?
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
