const express = require('express');
const bookingController = require('../controllers/screen')

const router = express.Router();


router.post("/",screenController.createScreen);
router.get("/:id",screenController.getScreen);

module.exports = router;