const express = require('express');
var bookingController=require('../Controllers/slot')

const router= express.Router();


router.get("/GetMovieBySlot/:CinemaID",slotController.GetMovieBySlot);
router.get("/GetSlotsByCinema/:CinemaID",slotController.GetSlotsByCinema);
router.get("/GetMoviesByCinema/:CinemaID",slotController.GetMoviesByCinema);
