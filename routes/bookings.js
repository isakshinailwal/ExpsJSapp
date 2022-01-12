const express = require('express');
const bookingController = require('../controllers/booking')

const router= express.Router()


router.get("/",bookingController.getAllBookings);
router.get("/:id",bookingController.getBookingByID);
router.post("/",bookingController.createBooking);
router.delete("/",bookingController.deleteBooking);


module.exports = router;