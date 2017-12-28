const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove({_id: '5a4505f4f481af0d5925d12b'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a4505f4f481af0d5925d12b').then((todo) => {
    console.log(todo);
}); 