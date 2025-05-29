import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/taskmate';

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
	.connect(mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as mongoose.ConnectOptions)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.error('MongoDB connection error:', err);
	});

// Todo schema and model
const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

interface ITodo {
	title: string;
	completed: boolean;
}

const Todo = mongoose.model<ITodo & mongoose.Document>('Todo', todoSchema);

// --- CRUD routes ---

// Create - POST /todos
app.post(
	'/todos',
	async (req: Request<{}, {}, { title: string }>, res: Response) => {
		const { title } = req.body;
		if (!title) return res.status(400).json({ error: 'Title is required' });

		try {
			const newTodo = new Todo({ title });
			await newTodo.save();
			res.status(201).json(newTodo);
		} catch (err) {
			res.status(500).json({ error: 'Failed to create todo' });
		}
	}
);

// Read all - GET /todos

app.get('/todos', async (req: Request, res: Response) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch todos' });
	}
});

// Update - PUT /todos/:id
app.put(
	'/todos/:id',
	async (
		req: Request<{ id: string }, {}, { title?: string; completed?: boolean }>,
		res: Response
	) => {
		const id = req.params.id;
		const { title, completed } = req.body;

		try {
			const todo = await Todo.findById(id);
			if (!todo) return res.status(404).json({ error: 'Todo not found' });

			if (title !== undefined) todo.title = title;
			if (completed !== undefined) todo.completed = completed;

			await todo.save();
			res.json(todo);
		} catch (err) {
			res.status(500).json({ error: 'Failed to update todo' });
		}
	}
);

// Delete - DELETE /todos/:id
app.delete(
	'/todos/:id',
	async (req: Request<{ id: string }>, res: Response) => {
		const id = req.params.id;

		try {
			const todo = await Todo.findByIdAndDelete(id);
			if (!todo) return res.status(404).json({ error: 'Todo not found' });

			res.status(204).send();
		} catch (err) {
			res.status(500).json({ error: 'Failed to delete todo' });
		}
	}
);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
