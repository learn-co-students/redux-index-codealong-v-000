import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class ToDosContainer extends React.Component {
    
    renderTodos = () => this.props.todos.map((todo, idx) => {
        return <Todo key={idx} todo={todo} />
    })
    
    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDosContainer);