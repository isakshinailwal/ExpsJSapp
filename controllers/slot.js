const mongoose = require('mongoose');
const Booking = require('../Models/booking');
const Cinema = require('../Models/cinema');

mongoose.connect("mongodb://localhost:27017/MovieApp");



module.exports.GetMovieBySlot = (req,res)=> {

    res.send('Success');
}

module.exports.GetSlotsByCinema = (req,res)=> {

    res.send('Success');
}
  module.exports.GetMoviesByCinema = (req,res)=> {

    res.send('Success');
}