const express = require('express');
const userController = require('../controllers/user');

const router= express.Router();
console.log('route');


router.get("/",userController.getAllUsers);
router.post("/create",userController.create);
router.post("/login",userController.login);
router.delete("/:ID",userController.delete);



module.exports = router;
