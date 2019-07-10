const mongoose = require('mongoose');
const userSchema = require('../schemas/user');

var User = mongoose.model('User', userSchema);

module.exports = {User};



