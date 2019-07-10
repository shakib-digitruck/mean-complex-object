const express = require('express');
const MongoClient = require("mongoose");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/user');
var {Address} = require('../models/address');
const AddressServiceClass = require('../services/address.service');

module.exports = {
    get: (req, res, next) => {
        const addressService = new AddressServiceClass();
        addressService
          .get()
          .then(data => {
              res.json(data);
          })
          .catch(err => {
              res.json(err);
          })
    },
};
