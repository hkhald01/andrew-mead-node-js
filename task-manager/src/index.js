const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');
require('./db/mongoose');
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