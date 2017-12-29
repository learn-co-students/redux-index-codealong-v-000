import React, { Component } from 'react';
import Todo from './Todo';

const Todos = ({ store }) => {
  const todos = store
    .getState()
    .todos.map(({ text }, index) => <Todo text={text} key={index} />);

  return <ul>{todos}</ul>;
};

export default Todos;
