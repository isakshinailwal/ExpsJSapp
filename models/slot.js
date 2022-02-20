const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;

const slotSchema = new mongoose.Schema({
    
    movieID:{type:String},
    slotTime:{type:String },
    screen:{type:String},
    cinema:{type:Object},
    cinemaID:{type:String}
    
    
});

module.exports = mongoose.model("Slot",slotSchema,"Slots");