import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        console.log("Todos Container is here!")
        return (
            <div>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);