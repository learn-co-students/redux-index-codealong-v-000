// Reducer
export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Concatenate the payload into the array of todos
      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
