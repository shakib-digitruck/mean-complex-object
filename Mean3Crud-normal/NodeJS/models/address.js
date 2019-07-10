const mongoose = require('mongoose');

var Address = mongoose.model('Address', {
    where: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
    user: [{
        name: { type: String },
        email: { type: String },
        mobile_number: { type: String },
        user_address : {
            where: {type: String},
            longitude: {type: Number},
            latitude: {type: Number}
        }
    }],
});

module.exports = { Address };
