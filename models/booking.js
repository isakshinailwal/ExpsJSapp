const mongoose=require('mongoose');
const { Schema } = mongoose;

const bookingSchema=new mongoose.Schema({
    cinema:{type: String },
    seats:{type:[String],required:true},
    date:{type:Date,required:true},
    movieID:{type:String,required:true },
    slot:{type:String,required:true },
    screen:{type:String},
    user:{type: String}
  
    
});

module.exports =new mongoose.model("Booking",bookingSchema,"Bookings");