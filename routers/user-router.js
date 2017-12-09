var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller')
router.post('/getItems',userController.getItems);
router.post('/reserve',userController.reserve);

module.exports = router;