const mongoose = require('mongoose');
const addressSchema = require('../schemas/address');

var Address = mongoose.model('Address', addressSchema);

module.exports = {Address};
