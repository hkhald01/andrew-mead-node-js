const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
	// const task = new Task(req.body);
	const task = new Task({
		...req.body,
		owner: req.user._id,
	});
	try {
		await task.save();
		res.status(201).send(task);
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/tasks', auth, async (req, res) => {
	try {
		// const tasks = await Task.find({});
		// const tasks =  await Tasks.find({owner: req.user._id});
		await req.user.populate('tasks').execPopulate();
		res.status(200).send(req.user.tasks);
	} catch (err) {
		res.status(500).send();
	}
});

router.get('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id;

	try {
		//const task = await Task.findById(_id);

		const task = await Task.findById({ _id, owner: req.user._id });
		if (!task) {
			res.status(404).send();
		}
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch('/tasks/:id', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['description', 'completed'];
	const isValidUpdate = updates.every((update) =>
		allowedUpdates.includes(update),
	);

	if (!isValidUpdate) {
		return res.status(400).send({ error: 'Invalid Updates' });
	}
	try {
		// const task = await Task.findById(req.params.id);
		const task = await Task.findOne({
			_id: req.params.id,
			owner: req.user._id,
		});

		// const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		// 	new: true,
		// 	runValidators: true,
		// });
		if (!task) {
			return res.status(404).send();
		}
		updates.forEach((update) => (task[update] = req.body[update]));
		await task.save();
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.delete('/tasks/:id', auth, async (req, res) => {
	try {
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
			owner: req.user._id,
		});
		if (!task) return res.status(404).send();
		res.status(200).send(task);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
