import React, { useState } from 'react';

const TodoForm: React.FC<{ onAddTodo(title: string): void }> = ({ onAddTodo }) => {
	const [title, setTitle] = useState<string>('');

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			onAddTodo(title);
			setTitle('');
		}
	};

	return (
		<div className="input-field mt2">
			<input id="title" type="text" value={title} onChange={changeHandler} onKeyPress={keyPressHandler} />
			<label htmlFor="title" className="active">
				Введите название дела
			</label>
		</div>
	);
};

export default TodoForm;
