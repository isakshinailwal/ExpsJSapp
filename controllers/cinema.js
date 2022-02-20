const mongoose=require('mongoose');
const Cinema = require('../models/cinema');
const Booking = require('../models/booking');
const Slot = require('../models/slot');

AllSeats=["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","C1","C2","C3","C4","C5","D1","D2","D3","D4","D5","E1","E2","E3","E4","E5"];
module.exports.getAllCinemas=async (req,res)=>{
 
  res.send(await Cinema.find({}));

 };

 module.exports.getCinemaListInCity=async(req,res)=>{
   
  let City = req.params.City;
  console.log(City);
   let Records = await Cinema.find({"city":City});
   
   res.send(Records);

};


module.exports.getCinemasByMovieID=async(req,res)=>{
   
  let MovieID = req.params.MovieID;
  var slots = await Slot.find({"movieID":MovieID});

  let CinemaIDs = [];
  slots.forEach(element => {
      if(!CinemaIDs.includes(element.cinemaID)) CinemaIDs.push(element.cinemaID);

  });

  let CinemaList =await Cinema.find({_id:{$in:CinemaIDs}});

  CinemaList.forEach(element => {
   
   
   
    slots.forEach(slot => {
      if(slot.cinemaID == element._id)
      element.slots.push(slot);
      delete element.screens;
    });

  
});

   res.send(CinemaList);

};









module.exports.getBookedSeats=async(req,res)=>{
   console.log('getBookedSeats Called');
   let CinemaID=req.params.cinemaID;
   let slot=req.params.slot;
   let date=req.params.date;
   console.log(CinemaID);
    var BookedSeats=[];
    var Bookings={};


    var Bookings = await Booking.find({"cinema":CinemaID,"slot":slot,date:date});
    console.log(Bookings);
     
    for(var n=0;n<Bookings.length;n++)
    {
      Bookings[n].seats.forEach(function(item, index){BookedSeats.push(item);});
    }
    res.statusCode = 200;
   
res.send(BookedSeats);return;


};


module.exports.getAvailableSeats =async(req,res)=>{
  console.log('getAvailableSeats Called');
  var CinemaID=req.params.CinemaID;
   var BookedSeats=[];
   var Bookings=null;
   
   var Bookings = await Booking.find({"Cinema":CinemaID});
   

    for(var n=0;n<Bookings.length;n++)
    {
     Bookings[n].Seats.forEach(function(item, index){BookedSeats.push(item);});
    }
    console.log(BookedSeats);   

    

    BookedSeats.forEach(element => {
      AllSeats.splice(AllSeats.indexOf(element),1);
    });
    res.statusCode = 200;
    res.send(AllSeats);


};



module.exports.getCinemaByID=async(req,res)=>{
  var id= req.params.id;

 var cinema =await Cinema.findById(id);
 cinema.slots =await Slot.find({cinemaID:id});

  res.send(cinema);

}

module.exports.getAudiByCinemaID=async(req,res)=>{
  var id= req.params.id;
  res.send(await Cinema.findById(id).audis);

}


module.exports.create  = async (req,res)=> {
 
  let record = req.body;
  let Result = await Cinema.create(record);
  res.send(Result);
  console.log('Cinema created');
}
module.exports.delete  =async (req,res)=> {

  let id = req.params.ID;
  console.log('cinema delete called');
  var Result = await Cinema.deleteOne({ _id: id });
  res.send(Result);
}