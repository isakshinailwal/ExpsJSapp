const express = require('express');
var bookingController=require('../controllers/slot')

const router= express.Router();


router.get("/getMovieBySlot/:cinemaID",slotController.getMovieBySlot);
router.get("/getSlotsByCinema/:cinemaID",slotController.getSlotsByCinema);
router.get("/getMoviesByCinema/:cinemaID",slotController.getMoviesByCinema);

module.exports = router;