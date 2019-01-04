const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
   
  export default connect(mapStateToProps)(TodosContainer);
  