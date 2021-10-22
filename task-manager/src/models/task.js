const mongoose = require('mongoose');

const taskShcema = new mongoose.Schema({
	completed: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

const Task = mongoose.model('Task', taskShcema);

module.exports = Task;
