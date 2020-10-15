import React, { useState, useEffect }  from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filterTodos, setFilterTodos] = useState([]);
	useEffect(() => {
		filterHandler();
	}, [todos, status]);
	const filterHandler = () => {
		switch(status) {
			case "completed":
				setFilterTodos(todos.filter(todo => todo.completed === true))
			break;
			case "uncompleted":
				setFilterTodos(todos.filter(todo => todo.completed === false));
			break;
			default: 
				setFilterTodos(todos);
				break;
		}
	}
  return (
    <div className="App">
      <header>
        <h1>VC's Todo List</h1>
        </header>
      <Form
	      inputText={inputText}
	      setInputText={setInputText}
	      todos={todos}
	      setTodos={setTodos}
      	  setStatus={setStatus}
      />
      <TodoList
	      setTodos={setTodos}
	      todos={todos}
      	  filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
