import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosConatiner extends Component {
    
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    
    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodosConatiner);