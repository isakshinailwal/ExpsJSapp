const mongoose = require('mongoose');
const Booking = require('../models/booking');


module.exports.getAllBookings = async(req,res)=> {
res.send(await Booking.find({}));
};


module.exports.getMyBookings = async(req,res)=> {
    let UserID = req.params.UserID;
    console.log(UserID);
    var Result = await Booking.find({"user":UserID});
    res.send(Result);

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
module.exports.deleteBooking  =async (req,res)=> {
    console.log('Calledsasdasd');
    let id = req.params.id;
    let Result= await Booking.deleteOne({ _id: id });
    res.send(Result);
}

