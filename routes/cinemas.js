const express = require('express');
const cinemaController = require('../controllers/cinema');

const router = express.Router();
router.get("/getCinemasByMovieID/:MovieID",cinemaController.getCinemasByMovieID);

router.get("/",cinemaController.getAllCinemas);
router.get("/getCinemaListInCity/:City",cinemaController.getCinemaListInCity);
router.get("/getBookedSeats/:cinemaID/:slot/:date",cinemaController.getBookedSeats);
router.get("/getAvailableSeats/:cinemaID",cinemaController.getAvailableSeats);
router.get("/:id",cinemaController.getCinemaByID);
router.post("/create",cinemaController.create);
router.delete("/:ID",cinemaController.delete);



module.exports = router;