import { useEffect, useState } from 'react';
import axios from 'axios';

type Todo = {
	_id: string;
	title: string;
	completed: boolean;
};

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [title, setTitle] = useState('');

	const fetchTodos = async () => {
		const res = await axios.get<Todo[]>('http://localhost:4000/todos');
		setTodos(res.data);
	};

	const addTodo = async () => {
		if (!title.trim()) return;
		await axios.post('http://localhost:4000/todos', { title });
		setTitle('');
		fetchTodos();
	};

	const deleteTodo = async (id: string) => {
		await axios.delete(`http://localhost:4000/todos/${id}`);
		fetchTodos();
	};

	const toggleComplete = async (todo: Todo) => {
		await axios.put(`http://localhost:4000/todos/${todo._id}`, {
			completed: !todo.completed,
		});
		fetchTodos();
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 p-4">
			<h1 className="text-2xl font-bold mb-4">TaskMate </h1>
			<div className="flex gap-2 mb-4">
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Enter todo"
					className="flex-1 p-2 border rounded"
				/>
				<button
					onClick={addTodo}
					className="bg-blue-500 text-white px-4 py-2 rounded"
				>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo) => (
					<li
						key={todo._id}
						className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
					>
						<span
							className={`flex-1 cursor-pointer ${
								todo.completed ? 'line-through text-gray-400' : ''
							}`}
							onClick={() => toggleComplete(todo)}
						>
							{todo.title}
						</span>
						<button
							onClick={() => deleteTodo(todo._id)}
							className="text-red-500 hover:text-red-700"
						>
							🗑️
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
