const mongoose = require('mongoose');
const Booking = require('../models/booking');
const Cinema = require('../models/cinema');
const Screen = require('../models/screen');
const Slot = require('../models/slot');


module.exports.getSlotsByCinemaID = async (req,res)=> {
    var id = req.params.id;
   
    var Result = await Slot.find({cinemaID:id});
    res.send(Result);
   
};
module.exports.getSlotByID = async (req,res)=> {

    let id = req.params.id;
    console.log('Slot FindByID Called');
    let Result = await Slot.findById(id);
    res.send(Result);
    
  };

  module.exports.getSlotsByMovieID = async (req,res)=> {

    let MovieID = req.params.id;
    console.log('Slot MovieID Called');
    let Slots = await Slot.find({"movieID":MovieID});
    let CinemaIDs = [];
    Slots.forEach(element => {
      if(!CinemaIDs.includes(element.cinemaID)) CinemaIDs.push(element.cinemaID);

  });
  let CinemaList =await Cinema.find({_id:{$in:CinemaIDs}});
  CinemaList.forEach(element => {
   
    Slots.forEach(slot => {
      if(slot.cinemaID == element._id)
      slot.cinema=(element);
     
    });

  
});
    res.send(Slots);
    
  };






module.exports.getMoviesByCinemaID =async (req,res)=> {

    res.send('Success');
}






module.exports.create = async (req,res)=> {

    let record = req.body;
    console.log(record);
    let Result = await Slot.create(record);
    res.send(Result);
   
}
module.exports.delete = async (req,res)=> {

    let id = req.params.id;
    console.log('Slot Delete Called');
    let Result = await Slot.deleteOne({_id:id});
    res.send(Result);
    
  }