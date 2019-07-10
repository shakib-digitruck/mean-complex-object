const express = require('express');
const MongoClient = require("mongoose");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/user');
var {Address} = require('../models/address');
const UserServiceClass = require('../services/user.service');

module.exports = {
  get: (req, res, next) => {
    const userService = new UserServiceClass();
    userService
      .get()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  },

  post: (req, res, next) => {
    const userService = new UserServiceClass();
    userService
      .post(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  },

  put: (req, res, next) => {
    const userService = new UserServiceClass();
    userService
      .put(req.params.id, req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  },

  delete: (req, res, next) => {
      const userService = new UserServiceClass();
      userService
        .delete(req.params.id)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        })
    }

};
