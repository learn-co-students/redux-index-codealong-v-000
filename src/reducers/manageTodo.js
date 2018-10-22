export default function manageTodo(state = {
	todos: [
		{ text: 'buy groceries' },
		{ text: 'feed birds' },
		{ text: 'pay tax' },
	],
}, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return { todos: state.todos.concat(action.todo) }
		default:
			return state;
	}
}
