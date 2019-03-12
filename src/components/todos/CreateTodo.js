// Create the todos
import React, { Component } from "react"
import { connect } from "react-redux"

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      text: "",
    })
  }
  // * ALTERNATIVE handleSubmit*
  // * If not given any arguments, connect will return dispatch 
  // * as a prop to the component we're wrapping with connect

  // handleSubmit = event => {
  //  event.preventDefault()
  //  this.props.dispatch({type: "ADD_TODO", payload: this.state})
  // }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
    	    <label>Add todo: </label>
            <input 
              type="text" 
              onChange={this.handleChange} 
              value={this.state.text}/>
          </p>
          <input type="submit" /><br /><br />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
})
// In this component, we're not currently concerned with writing a 
// mapStateToProps function (the first argument passed to connect) 
// so we can use null instead of mapStateToProps as the first argument
export default connect(null, mapDispatchToProps)(CreateTodo);

// * ALTERNATIVE connect*
// * If not given any arguments, connect will return dispatch 
// * as a prop to the component we're wrapping with connect

// export default connect()(CreateTodo)
