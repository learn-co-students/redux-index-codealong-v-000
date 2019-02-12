import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

//2.concerned with getting todos from the store or getting state from Redux

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} /> )

    render(){
        return(
            <div>
                 {this.renderTodos()}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
         todos: state.todos
    }
}


export default connect(mapStateToProps)(TodosContainer);