import React, { useState, useEffect } from 'react';

import { TodoForm, TodoList } from '../components';
import { ITodo } from '../interfaces';

const TodoPages: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
		setTodos(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const findIndexTodo = (id: number): number => todos.findIndex((todo) => todo.id === id);

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			id: Date.now(),
			title,
			completed: false,
		};

		setTodos((prev) => [newTodo, ...prev]);
	};

	const toggleHadler = (id: number) => {
		const indexTodo = findIndexTodo(id);

		setTodos((prev) => [
			...prev.slice(0, indexTodo),
			{
				...todos[indexTodo],
				completed: !todos[indexTodo].completed,
			},
			...prev.slice(indexTodo + 1),
		]);
	};

	const removeHadler = (event: React.MouseEvent, id: number) => {
		event.preventDefault();

		window.confirm('Вы уверены, что хотите удалить элемент?') &&
			setTodos((prev) => [...prev.slice(0, findIndexTodo(id)), ...prev.slice(findIndexTodo(id) + 1)]);
	};

	return (
		<>
			<TodoForm onAddTodo={addHandler} />
			<TodoList todos={todos} onToggle={toggleHadler} onRemove={removeHadler} />
		</>
	);
};

export default TodoPages;
