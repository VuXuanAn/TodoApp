var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');

// GET 1 todo
async function getTodo(req, res, next) {
	let todo;
	try {
		todo = await Todo.findById(req.params.id);
		if (todo == null) {
			return res.status(404).json({ message: 'Cannot find student' });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
	res.todo = todo;
	next();
}

/* localhost:3100/todo - GET todoList */
router.get('/', async (req, res) => {
	try {
		const todoList = await Todo.find();
		res.status(200).json(todoList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Getting one
router.get('/:id', getTodo, (req, res) => {
	res.json(res.todo);
});

// Creating one
router.post('/', async (req, res) => {
	const todo = new Todo({
		title: req.body.title,
		content: req.body.content,
	});
	try {
		const newTodo = await todo.save();
		res.status(201).json(newTodo);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Updating one
router.patch('/:id', getTodo, async (req, res) => {
	if (req.body.title != null) res.todo.title = req.body.title;
	if (req.body.content != null) res.todo.content = req.body.content;
	if (req.body.isDone != null) res.todo.isDone = req.body.isDone;
	try {
		const updatedTodo = await res.todo.save();
		res.json(updatedTodo);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Deleting one
router.delete('/:id', getTodo, async (req, res) => {
	try {
		await res.todo.remove();
		res.json({ message: 'Deleted Todo' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
