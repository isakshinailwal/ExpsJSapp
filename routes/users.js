const express = require('express');
const userController = require('../Controllers/user');

const router= express.Router();

router.get("/",userController.GetAllUsers);
router.post("/create",userController.Create);



module.exports = router;