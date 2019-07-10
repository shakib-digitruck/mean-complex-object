module.exports = {
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
};
