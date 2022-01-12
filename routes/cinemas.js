
const express = require('express');
var cinemaController=require('../controllers/cinema')

const router= express.Router()


router.get("/all",cinemaController.getAllCinemas);
router.get("/getCinemaListInCity/:city",cinemaController.getCinemaListInCity);
router.get("/getBookedSeats/:cinemaID",cinemaController.getBookedSeats);
router.get("/getAvailableSeats/:cinemaID",cinemaController.getAvailableSeats);
router.get("/getCinemaByID/:id",cinemaController.getCinemaByID);
router.get("/getAudiByCinemaID/:id",cinemaController.getCinemaByID);


module.exports =router;