const {Address} = require("../models/address");

class AddressService {

  get() {
    return new Promise((resolve, reject) => {
      Address.find((err, docs) => {
        if (!err) resolve(docs);
        else reject(err);
      });
    });
  }
}

module.exports = AddressService;
