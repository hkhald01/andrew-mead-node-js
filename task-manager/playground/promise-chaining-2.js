require('../src/db/mongoose');
const Task = require('../src/models/task');

const _id = '61681bb4cda32d9fc8102ba7';
// Task.findByIdAndDelete(_id)
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((count) => {
// 		console.log(count);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const findByIdAndDelete = async (_id) => {
	const task = await Task.findByIdAndDelete(_id);
	const count = Task.countDocuments({ completed: false });
	return count;
};

findByIdAndDelete(_id)
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});
