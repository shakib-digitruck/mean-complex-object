const mongoose = require('mongoose');
const config = require('./../configs/config');

module.exports = (databaseName) => {
  mongoose
    .connect(config.mongoConnectionString + databaseName, {useNewUrlParser: true})
    .then(() => {
      console.log('Connection is established successfully');
    })
    .catch(err => {
      console.log('Database connection is not established');
    });
};
