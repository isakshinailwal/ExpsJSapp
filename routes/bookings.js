const express = require('express');
const bookingController=require('../controllers/booking')

const router= express.Router()


router.get("/all",bookingController.getAllBookings);
router.get("/get/:id",bookingController.getBookingByID);
router.post("/create",bookingController.createBooking);




module.exports =router;