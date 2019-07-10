const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    mobile_number: { type: String },
    user_address : {
        where: {type: String},
        longitude: {type: Number},
        latitude: {type: Number}
    }
});

module.exports = {User};
