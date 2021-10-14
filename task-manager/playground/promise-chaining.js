require('../src/db/mongoose');
const User = require('../src/models/user');

const _id = '615f0f903e5a31f74e015284';

// User.findByIdAndUpdate(_id, { age: 28 })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 28 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const updateAgeAndCount = async (_id, age) => {
	const user = await User.findByIdAndUpdate(_id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount(_id, 27)
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});
