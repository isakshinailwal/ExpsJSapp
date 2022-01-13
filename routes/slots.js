const express = require('express');
const bookingController = require('../controllers/slot');

const router = express.Router();


router.get("/getSlotsByCinema/:cinemaID",slotController.getSlotsByCinema);
router.post("/",slotController.createSlot);
router.get("/getMoviesByCinema/:cinemaID",slotController.getMoviesByCinema);

module.exports = router;