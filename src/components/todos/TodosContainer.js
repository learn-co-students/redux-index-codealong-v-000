import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class ToDosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    render() {
        return(
            <div>
                {this.renderTodos}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


// only getting state from Redux; not dispatching action
export default connect(mapStateToProps)(ToDosContainer);