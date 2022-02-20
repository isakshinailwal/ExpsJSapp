const express = require('express');
const screenController = require('../controllers/screen')

const router = express.Router();


router.post("/",screenController.createScreen);
router.get("/",screenController.getAllScreens);

module.exports = router;