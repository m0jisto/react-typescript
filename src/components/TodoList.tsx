import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
	todos: ITodo[];
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
	return (
		<ul>
			{todos.map(({ id, title, completed }) => (
				<li key={`${title}_${id}`} className={`todo ${completed ? 'completed' : ''}`}>
					<label>
						<input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
						<span>{title}</span>
						<i className="material-icons red-text" onClick={() => onRemove(id)}>
							delete
						</i>
					</label>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
