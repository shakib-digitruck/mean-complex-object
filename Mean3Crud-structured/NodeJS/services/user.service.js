var ObjectId = require('mongoose').Types.ObjectId;


const {User} = require("../models/user");
const {Address} = require("../models/address");

class UserService {
  get() {
    return new Promise((resolve, reject) => {
      User.find((err, docs) => {
        if (!err) resolve(docs);
        else reject(err);
      });
    });
  }

  post(reqBody) {
    var address = new Address({
      user: [],
      where: reqBody.user_address.where,
      longitude: reqBody.user_address.longitude,
      latitude: reqBody.user_address.latitude,
    });

    var user = new User({
      name: reqBody.name,
      email: reqBody.email,
      mobile_number: reqBody.mobile_number,
      user_address: address,
    });

    var patt = new RegExp("[a-zA-Z0-9]+[_$]*@[a-zA-Z0-9]+\.[a-zA-Z]");


    return new Promise((resolve, reject) => {
      user.save((err, doc) => {
        if (!err) {
          resolve(doc);
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
                  console.log("Updated address successfully");
                } else {
                  console.log('Error in address update : ' + JSON.stringify(err, undefined, 2));
                }
              });
            }
          });
        } else {
          reject('Error in User Save :' + JSON.stringify(err, undefined, 2));
        }
      });
    });
  }

  put(reqParamsId, reqBody){
    if (!ObjectId.isValid(reqParamsId))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
      name: reqBody.name,
      email: reqBody.email,
      mobile_number: reqBody.mobile_number,
      user_address: {
        where: reqBody.user_address.where,
        longitude: reqBody.user_address.longitude,
        latitude: reqBody.user_address.latitude,
      },
    };
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(reqParamsId, { $set: user}, { new: true}, (err22, doc22) => {
        if(!err22) { resolve(doc22)}
        else {reject(err22); }
      });
    });
  }

  delete(reqParamsId){
    if(!ObjectId.isValid(reqParamsId)){
      return res.status(400).send('No record with given id : ${req.params.id}');
    }
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove(reqParamsId, (err, doc) => {
        if(!err) {resolve(doc); }
        else{
          console.log('error in USER remove : ' + JSON.stringify(err, undefined, 2));
        }
      });
    });
  }
}

module.exports = UserService;
