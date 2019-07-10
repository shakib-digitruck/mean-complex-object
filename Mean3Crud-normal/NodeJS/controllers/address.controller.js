const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Address } = require('../models/address');

router.get('/', (req, res) => {
    Address.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving todos :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
