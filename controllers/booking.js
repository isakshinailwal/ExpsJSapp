const mongoose=require('mongoose');
const Booking = require('../Models/booking');
mongoose.connect("mongodb://localhost:27017/MovieApp");


module.exports.GetAllBookings=async(req,res)=>{


res.send(await Booking.find({}));

 };




module.exports.GetBookingByID=async(req,res)=>{
    var id= req.params.id;
    res.send(await Booking.findById(id));
}



module.exports.CreateBooking=async(req,res)=>{
    var record = req.body;
    var Result = await Booking.create(record);
    res.send(Result);
};
