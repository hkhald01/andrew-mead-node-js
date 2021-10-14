const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
	const task = new Task(req.body);
	try {
		await task.save();
		res.status(201).send(task);
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/tasks', async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).send(tasks);
	} catch (err) {
		res.status(500).send();
	}
});

router.get('/tasks/:id', async (req, res) => {
	const _id = req.params.id;

	try {
		const task = await Task.findById(_id);
		if (!task) {
			res.status(404).send();
		}
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.patch('/tasks/:id', async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['description', 'completed'];
	const isValidUpdate = updates.every((update) =>
		allowedUpdates.includes(update),
	);

	if (!isValidUpdate) {
		return res.status(400).send({ error: 'Invalid Updates' });
	}
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res.status(404).send();
		}
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.delete('/tasks/:id', async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) return res.status(404).send();
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
