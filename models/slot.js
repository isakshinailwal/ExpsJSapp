const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;

const showSchema = new mongoose.Schema({
    
    movieID:{
        type:String 
    },
    slotTime:{
        type:Date 
    },
    date:{
        type:Date
    }
    
});

module.exports = mongoose.model("Slot",showSchema,"Slots");