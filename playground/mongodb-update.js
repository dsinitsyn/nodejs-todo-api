const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log(obj);

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (err, database) => {
    if ( err ) {
        return console.log('Unable to connenct to MongoDB server');
    }
    let db = database.db('Todos');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5a3d09c442bf83e8b2d57342')
        }, {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then(res => {
        console.log(res);
    });

    //database.close();
});