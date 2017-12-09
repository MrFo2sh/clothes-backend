var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin-controller')
router.post('/getItems',adminController.getItems);
router.post('/updateItem',adminController.updateItem);
router.post('/addItem',adminController.addItem);
router.post('/login',adminController.login)

module.exports = router;