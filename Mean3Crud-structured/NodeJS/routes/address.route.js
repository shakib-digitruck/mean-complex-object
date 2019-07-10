const router = require('./../configs/express').router;
const addressController = require('../controllers/address.controller');

router.get('/addresses', addressController.get);

module.exports = router;
