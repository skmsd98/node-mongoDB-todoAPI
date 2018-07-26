var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new Users({
    name: '   Albert Einstein  ',
    age: 139
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Error: ', e)
});