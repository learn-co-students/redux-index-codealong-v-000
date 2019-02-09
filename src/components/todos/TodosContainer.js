import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import uuid from 'uuid';

class TodosContainer extends Component {
    renderTodos = () => this.props.todos.map(todo => <Todo key={uuid()} text={todo} />)
    
    render() {
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

export default connect (state => ({ todos: state.todos }))(TodosContainer);