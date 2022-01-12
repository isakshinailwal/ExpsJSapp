const express = require('express');
const userController = require('../Controllers/user');

const router= express.Router();

router.get("/",userController.getAllUsers);
router.post("/create",userController.create);



module.exports = router;