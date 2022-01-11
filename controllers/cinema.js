const mongoose=require('mongoose');
const Cinema = require('../Models/cinema');
const Booking = require('../Models/booking');

mongoose.connect("mongodb://localhost:27017/MovieApp");

AllSeats=["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","C1","C2","C3","C4","C5","D1","D2","D3","D4","D5","E1","E2","E3","E4","E5"];
module.exports.GetAllCinemas=async (req,res)=>{
 

res.send(await Cinema.find({}));

 };

 module.exports.GetCinemaListInCity=async(req,res)=>{
   var City = req.params.City;
  
   var Records = await Cinema.find({City:City});
   res.send(Records);

};


module.exports.GetBookedSeats=async(req,res)=>{
   console.log('GetBookedSeats Called');
   var CinemaID=req.params.CinemaID;
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


module.exports.GetAvailableSeats =async(req,res)=>{
  console.log('GetAvailableSeats Called');
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



module.exports.GetCinemaByID=async(req,res)=>{
    var id= req.params.id;
    res.send(await Cinema.findById(id));
  
}