const mongoose = require('mongoose');
const Booking = require('../models/booking');


module.exports.getAllBookings = async(req,res)=> {
res.send(await Booking.find({}));
};

module.exports.getBookingByID=async(req,res)=> {
    let id = req.params.id;
    res.send(await Booking.findById(id));
}

module.exports.createBooking = async(req,res)=> {
    let record = req.body;
    let Result = await Booking.create(record);
    res.send(Result);
};

