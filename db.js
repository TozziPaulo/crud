var mongoose = require('mongoose');
mongoose.connect('mongodb://tozzi:123mudar@ds237389.mlab.com:37389/descontosapp');

var userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }