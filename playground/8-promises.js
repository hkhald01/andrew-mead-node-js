// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         // resolve([7,4,1]);
//         reject('Things went wrong!');
//     },2000);
// })

// const { resolve } = require('path/posix');

// doWorkPromise.then((result) => {
// console.log(result);
// }).catch((err) => {
//     console.log(err)
// });

const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
};

// add(1, 2)
// 	.then((sum) => {
// 		console.log(sum);
// 		add(sum, 5)
// 			.then((sum2) => {
// 				console.log(sum2);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

add(1, 1)
	.then((sum) => {
		console.log(sum);
		return add(sum, 4);
	})
	.then((sum2) => {
		console.log(sum2);
	})
	.catch((err) => {
		console.log(err);
	});
