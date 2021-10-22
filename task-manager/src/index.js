const express = require('express');
require('./db/mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log(`server is up and running @ port ${port}`);
});

const Task = require('./models/task');
const main = async () => {
	// const task = await Task.findById('6171a3d994282319b261cd84');
	// await task.populate('owner').execPopulate();
	// console.log(task.owner);
	const user = await User.findById('6171a2f494282319b261cd81');
	await user.populate('tasks').execPopulate();
	console.log(user.tasks);
};
main();

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down check back soon');
// });

// const myFnction = async () => {
// 	const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
// 		expiresIn: '7 days',
// 	});
// 	console.log(token);

// 	const payload = jwt.verify(token, 'thisismynewcourse');
// 	console.log(payload);
// };

// myFnction();
// app.post('/users', (req, res) => {
// 	const user = new User(req.body);

// 	user.save()
// 		.then(() => {
// 			res.send(user);
// 		})
// 		.catch((err) => {
// 			res.status(400);
// 			res.send(err);
// 		});
// });

// app.get('/users', (req, res) => {
// 	User.find({})
// 		.then((users) => {
// 			res.send(users);
// 		})
// 		.catch(() => {
// 			res.status(500).send();
// 		});
// });

// app.get('/users/:id', (req, res) => {
// 	const _id = req.params.id;
// 	User.findById(_id)
// 		.then((user) => {
// 			if (!user) {
// 				return res.status(404).send();
// 			}
// 			res.send(user);
// 		})
// 		.catch((err) => {
// 			res.status(500).send();
// 		});
// });

// app.post('/tasks', (req, res) => {
// 	const task = new Task(req.body);
// 	task.save()
// 		.then(() => {
// 			res.send(task);
// 		})
// 		.catch((err) => {
// 			res.status(400).send(err);
// 		});
// });

// app.get('/tasks', (req, res) => {
// 	Task.find({})
// 		.then((tasks) => {
// 			res.send(tasks);
// 		})
// 		.catch(() => {
// 			res.status(500).send();
// 		});
// });

// app.get('/tasks/:id', (req, res) => {
// 	const _id = req.params.id;
// 	Task.findById(_id)
// 		.then((task) => {
// 			if (!task) {
// 				return res.status(404).send();
// 			}
// 			res.send(task);
// 		})
// 		.catch(() => {
// 			res.status(500).send();
// 		});
// });
