const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;

const showSchema=new mongoose.Schema({
    cinemaID:{
        type:String 
    },
    movieID:{
        type:String 
    },
    slotTime:{
        type:String 
    },
    bookedSeats:{
        type:[String]
    },
    date:{
        type:Date
    }
    
});

module.exports = mongoose.model("Slot",showSchema,"Slots");