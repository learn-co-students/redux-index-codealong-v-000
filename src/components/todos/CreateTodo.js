import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
    text: ''
    })

  }


  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

/*
  <Form
    onSubmit={onSubmit}
    initialValues={{ employed: true }}
    render={({ handleSubmit, reset }) => (
      <form
        onSubmit={event => {
          handleSubmit(event).then(() => {
            reset() // or could be passed directly to then()
          })
        }}
      >
      ...
      </form>
    }/>
    */

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" placeholder="Task Name" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateTodo);
