const express = require('express');
const bookingController = require('../controllers/screen')

const router = express.Router();


router.post("/create",screenController.createScreen);
router.get("/getScreen/:screenID",screenController.getScreen);

module.exports = router;