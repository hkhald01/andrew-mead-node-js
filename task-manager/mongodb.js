// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log


MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error,client) =>{
if (error) {
    return console.log('Unable to connect to database');
} 
console.log('Connection usccessfull !');
const db = client.db(database);

// db.collection('tasks').deleteOne({description: 'Pot plants'})
// .then(result => {console.log(result);}).catch(error => {console.log(error)});


// db.collection('users').deleteMany({age: 27})
// .then(result => {console.log(result);}).catch(error => {console.log(error)});

// db.collection('tasks').updateMany({
//     completed: false}, 
//     {$set: {
//         completed: true,   
//     }
// })
// .then(result => {console.log(result.modifiedCount);}).catch(error => {console.log(error)})

// db.collection('users').updateOne({
//     _id: new ObjectID ('615dc44a5751bf8a8c694aeb')}, 
//     {$set: {
//         name: 'Mike',   
//     }
// })
// .then(result => {console.log(result);}).catch(error => {console.log(error)})

// db.collection('tasks').findOne({_id: new ObjectID("615dc731863c298f90fed253")}, (err,task) =>{
//     if (err) {
//         console.log('Unable to find task');
//     }
//     console.log(task)
// })

// db.collection('tasks').find({completed: false}).toArray((err,tasks) =>{
//     if (err) {
//         console.log('Unable to find tasks');
//     }
//     console.log(tasks);
// })

// db.collection('users').find({age: 27}).toArray((error, users) =>{
//     if (error) {
//         console.log('Unable to find user')
//     }
//     console.log(users);
// });

// db.collection('users').find({age: 27}).count((error, count) =>{
//     if (error) {
//         console.log('Unable to find user')
//     }
//     console.log(count);
// });

// db.collection('users').findOne({name:'Andrew', age:27}, (error, user) =>{
//     if (error) {
//         console.log('Unable to find user')
//     }
//     console.log(user)
// })

// db.collection('users').findOne({_id: new ObjectID("615dc5e20fb3b28d019b7204")}, (error, user) =>{
//     if (error) {
//         console.log('Unable to find user')
//     }
//     console.log(user)
// })

// db.collection('users').insertOne({
//     _id: id,
//     name: 'Vikram',
//     age: 26,
// }, (error, result) =>{
//     if(error) {
//        return console.log('Unable to insert user');
//     }
//     console.log(result.ops);
// });

// db.collection('users').insertMany([
//     {
//         name:'Jen',
//         age: 28,   
//     },
//     {
//         name:'Gunther',
//         age: 27,   
//     },
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to insert document');
//     }
//     console.log(result.ops);
// });

// db.collection('tasks').insertMany([
//     {
//         completed: true,
//         description: 'Clean the house',
//     },
//     {
//         completed: false,
//         description: 'Renew subscription',
//     },
//     {
//         completed: false,
//         description: 'Pot plants',
//     },
// ], (error, result) => {
//     if (error) return console.log('Unable to insert tasks');
//     console.log(result.ops)
// });
});
