const router = require('./../configs/express').router;
const userController = require('../controllers/user.controller');

router.get('/users', userController.get);
router.post('/users', userController.post);
router.put('/users/:id', userController.put);
router.delete('/users/:id', userController.delete);

module.exports = router;
