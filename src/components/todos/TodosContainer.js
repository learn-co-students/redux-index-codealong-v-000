import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo  from './Todo'

//  Our state is properly updating but we are not displaying these 
// updates to the user.We need a component that references the store and then
// uses the data from the store to reference the list of Todos.



class TodosContainer extends Component {
   
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

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

export default connect(mapStateToProps)(TodosContainer);