const bodyParser = require('body-parser');
const express = require('express');
const { mongoose } = require('./db.js');

var addressController = require('./controllers/address.controller.js');
var userController = require('./controllers/user.controller.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/addresses', addressController);
app.use('/users', userController);
