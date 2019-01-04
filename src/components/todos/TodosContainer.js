import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
class TodosContainer extends Component {


  renderTodos = () => this.props.todos.map((item, id) =>
    <Todo key={id} text={item}/>
  )

  render (){
    return(
      <div>Todos
        <ul>
          {this.renderTodos()}
        </ul>

      </div>

    );
  }
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps)(TodosContainer);
