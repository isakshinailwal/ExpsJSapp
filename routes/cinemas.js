const express = require('express');
const cinemaController = require('../controllers/cinema');

const router = express.Router()

router.get("/",cinemaController.getAllCinemas);
router.get("/getCinemaListInCity/:city",cinemaController.getCinemaListInCity);
router.get("/getBookedSeats/:cinemaID",cinemaController.getBookedSeats);
router.get("/getAvailableSeats/:cinemaID",cinemaController.getAvailableSeats);
router.get("/getCinemaByID/:id",cinemaController.getCinemaByID);
router.get("/getAudiByCinemaID/:id",cinemaController.getCinemaByID);
router.post("/create",cinemaController.create);



module.exports = router;