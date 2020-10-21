import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends React.Component {
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo}/> )

    render(){
        return(
        <div>{this.renderTodos()}</div>
        )
    }
}

//v called every time Redux store state changes
const mapStateToProps = state => { //state is current state of comp
    return {
        todos: state.todos //returns new state object: stateProps object, merged to connect comp
    }
}

export default connect(mapStateToProps)(TodosContainer)