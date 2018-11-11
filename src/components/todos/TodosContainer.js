import React, {Component} from 'react'
import { connect } from 'react-redux'
import ToDo from './Todo'

class ToDoContainer extends Component {

  renderToDos = () => this.props.todos.map((todo, index) => <ToDo key={index} text={todo} />)


  render(){
    return(

      <div>
        <ul>
          {this.renderToDos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}
export default connect(mapStateToProps)(ToDoContainer)
