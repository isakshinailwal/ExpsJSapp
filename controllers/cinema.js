const mongoose=require('mongoose');
const Cinema = require('../models/cinema');
const Booking = require('../models/booking');

AllSeats=["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","C1","C2","C3","C4","C5","D1","D2","D3","D4","D5","E1","E2","E3","E4","E5"];
module.exports.getAllCinemas=async (req,res)=>{
 

res.send(await Cinema.find({}));

 };

 module.exports.getCinemaListInCity=async(req,res)=>{
   let City = req.params.City;
  
   let Records = await Cinema.find({City:City});
   res.send(Records);

};


module.exports.getBookedSeats=async(req,res)=>{
   console.log('getBookedSeats Called');
   let CinemaID=req.params.CinemaID;
    var BookedSeats=[];
    var Bookings=null;


    var Bookings = await Booking.find({"Cinema":CinemaID});

    for(var n=0;n<Bookings.length;n++)
    {
      Bookings[n].Seats.forEach(function(item, index){BookedSeats.push(item);});
    }
    res.statusCode = 200;
    res.send(BookedSeats);



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
  res.send(await Cinema.findById(id));

}

module.exports.getAudiByCinemaID=async(req,res)=>{
  var id= req.params.id;
  res.send(await Cinema.findById(id).audis);

}


module.exports.create  = (req,res)=> {

  res.send('Success');
}