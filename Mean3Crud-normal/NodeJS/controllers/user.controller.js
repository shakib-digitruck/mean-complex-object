
const express = require('express');
const MongoClient = require("mongoose");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');
var {Address} = require('../models/address');

router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving todos :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {

    var address = new Address({
        user: [],
        where: req.body.user_address.where,
        longitude: req.body.user_address.longitude,
        latitude: req.body.user_address.latitude,
    });

    var user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        user_address: address
    });

    var patt = new RegExp("[a-zA-Z0-9]+[_$]*@[a-zA-Z0-9]+\.[a-zA-Z]");


    let validEmail = new Promise((res, rej) => {
        if(patt.test(user.email)) res("Right");
        else rej("Wrong");
    });

    console.log(patt.test(user.email).toString());


    validEmail.then((resolve) => {
        user.save((err, doc) => {
            if (!err) {
                res.send(doc);
                Address.find({where: doc.user_address.where}, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else if (data.length == 0) {
                        address.user.push(doc);
                        address.save((err, doc1) => {
                            if (!err) {
                                console.log('posted');
                            } else {
                                console.log('Error in Address Save :' + JSON.stringify(err, undefined, 2));
                            }
                        });
                    } else {
                        var newArray = data[0].user;
                        newArray.push(doc);
                        Address.updateOne({where: doc.user_address.where}, {$set: {user: newArray}}, function (err, resol) {
                            if (!err) {
                                console.log("tfghfghfhhhfghfghgh")
                            } else {
                                console.log('Error in employee update : ' + JSON.stringify(err, undefined, 2));
                            }
                        });
                    }

                    console.log("datar length = " + data.length.toString());

                });
            } else {
                console.log('Error in User Save :' + JSON.stringify(err, undefined, 2));
            }
        });
    }).catch((err) => {
        //res.send(JSON.stringify(err, undefined, 2));
        console.log('Error in Address Save :' + JSON.stringify(err, undefined, 2));
    });


});


module.exports = router;
