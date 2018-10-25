import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from '.Todo.js'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map(todo, index) => <Todo key={id} text={todo} />)
    render (){
        return(
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

export default connect(mapStateToProps)(TodosContainer)