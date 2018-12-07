import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodosContainer = props => {
  return(
    <div>
      { props.todos.map((todo, index) => (
        <Todo key={index} text={todo} />
      ) )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosContainer);
