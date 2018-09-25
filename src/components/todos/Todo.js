import React from 'react'
 
const Todo = props => {
  handleSubmit = event => {
      event.preventDefault();
      this.props.addTodo(this.state)
      this.setState({
        text: '',
    })
}
 
  
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;