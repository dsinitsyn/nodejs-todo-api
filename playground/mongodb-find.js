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
    
    db.collection('Todos').find({
        _id: new ObjectID('5a3d09c442bf83e8b2d57342')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('unable to fetch todos', err)
    });


    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, err => {
        console.log('unable to fetch todos', err)
    });
    
    //database.close();
});