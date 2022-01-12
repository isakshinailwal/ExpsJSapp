const express = require('express');
const router = express.Router();

const userController = require("../Controllers/user");

router.get('/test', userController.test);
router.post('/login', userController.login);


module.exports = router;