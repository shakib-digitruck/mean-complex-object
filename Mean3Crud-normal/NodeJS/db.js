const mongoose = require('mongoose');
const config = require('./configs/config');

mongoose.connect(config.mongoConnectionString, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
