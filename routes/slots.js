const express = require('express');
const slotController = require('../controllers/slot');

const router = express.Router();


router.get("/getSlotsByCinemaID/:id",slotController.getSlotsByCinemaID);
router.post("/create",slotController.create);
router.get("/getMoviesByCinemaID/:cinemaID",slotController.getMoviesByCinemaID);
router.delete("/:id",slotController.delete);
router.get("/:id",slotController.getSlotByID);
router.get("/getSlotsByMovieID/:id",slotController.getSlotsByMovieID);
//
module.exports = router;