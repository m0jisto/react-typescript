import React, { useState } from 'react';

import { Navbar, TodoForm, TodoList } from './components';
import { ITodo } from './interfaces';

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			id: Date.now(),
			title,
			completed: false,
		};

		setTodos((prev) => [newTodo, ...prev]);
	};

	const toggleHadler = (id: number) =>
		setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));

	const removeHadler = (id: number) => {
		const indexTodo = todos.findIndex((todo) => todo.id === id);

		setTodos((prev) => [...prev.slice(0, indexTodo), ...prev.slice(indexTodo + 1)]);
	};

	console.log(todos);

	return (
		<>
			<Navbar />
			<div className="container">
				<TodoForm onAddTodo={addHandler} />

				<TodoList todos={todos} onToggle={toggleHadler} onRemove={removeHadler} />
			</div>
		</>
	);
};

export default App;
