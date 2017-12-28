const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID()

console.log(obj);

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (err, database) => {
    if ( err ) {
        return console.log('Unable to connenct to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    let db = database.db('Todos');

    //db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    //}, (err, res) => {
    //    if ( err ) {
    //        return console.log('Unable to insert todo', err);
    //    }
    //
    //    console.log(JSON.stringify(res.ops, undefined, 2));
    //});

    //db.collection('Users').insertOne({
    //    name: 'Dima',
    //    age: 24,
    //    location: 'Kiev'
    //}, (err, res) => {
    //    if ( err ) {
    //        return console.log('Unable to insert user', err);
    //    }
    //
    //    console.log(res.ops[0]._id.getTimestamp());
    //});

    database.close();
});