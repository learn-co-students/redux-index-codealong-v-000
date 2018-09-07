import React, { Component } from 'react';
import { connect } from 'react-redux'
 
class TodosContainer extends Component {
 
  render() {
    return(
      <div></div>
    );
    
    const mapStateToProps = state => {
      return{
        todos: state.todoss
      }
    }
  }
};
 
export default connect(mapStateToProps)(TodosContainer);