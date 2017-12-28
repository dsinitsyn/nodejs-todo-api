const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log(obj);

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (err, database) => {
    if ( err ) {
        return console.log('Unable to connenct to MongoDB server');
    }
    let db = database.db('Todos');

    //deleteMany
    //db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //    console.log(res);
    //});

    //deleteOne
    //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //    console.log(res);
    //});


    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
        console.log(res);
    });

    //database.close();
});