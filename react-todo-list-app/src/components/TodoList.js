import React from "react";
import Todo from './Todo';

function TodoList(props) {	// This can also be written as const TodoList = () => {
	return (
		<div className="todo-container">
	      <ul className="todo-list">
	      	{
		      	props.filterTodos.map(todo => (
		      		<Todo
		      		todo={todo}
		      		todos={props.todos}
		      		setTodos={props.setTodos}
		      		text={todo.text}
		      		key={todo.id}/>
		      	))
	      	}
	      </ul>
	    </div>
	)
}

export default TodoList;