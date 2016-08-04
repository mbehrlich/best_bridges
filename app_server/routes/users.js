var express = require('express');
var router = express.Router();
var ctrlUser = require('../controllers/users_controller.js');

/* GET users listing. */
router.get('/', ctrlUser.index);
router.get('/new', ctrlUser.addUser);
router.get('/1', ctrlUser.userInfo);
router.get('/1/edit', ctrlUser.editUser);

module.exports = router;
