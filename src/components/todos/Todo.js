//doesn't have any redux related code
//is a regular, function component

import React from 'react';

const Todo = props => {
	return(
		<li>{props.text}</li>
	);
};

export default Todo;