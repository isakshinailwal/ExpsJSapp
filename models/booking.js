const mongoose=require('mongoose');
const { Schema } = mongoose;
const cinemaSchema = require("./cinema");

const bookingSchema=new mongoose.Schema({
    cinema:[{ 
        type: Schema.Types.ObjectId, 
        ref: 'Cinema'
    }],
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    mobile:{
        type:String,
        required:true
    },
    seats:{
        type:[String],
        required:true 
    },
    date:{
        type:Date,
        required:true 
    },
    movieID:{
        type:String,
        required:true },
    slot:{
        type:String,
        required:true
    }
    
});

module.exports=new mongoose.model("Booking",bookingSchema,"Bookings");