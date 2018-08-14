import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    
    //Clear out the component state, which will then clear out the 'value' of the input component.
    this.setState({
      text: '',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
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
