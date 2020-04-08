import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

/*
Now, we aren't worried about dispatching actions here, only getting state from
Redux, so we'll need to write out a mapStateToProps() function and include it as
an argument for connect():
*/
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
