const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;
const { Schema }= mongoose.Schema;
const slotSchema = require("./slot");


const screenSchema = new mongoose.Schema({
    screenName:{
        type:String, 
        required:true
    },
    
    slot:[{ 
        type: Schema.Types.ObjectId, 
        ref: 'Slot'
    }]
    
   
})

module.exports = mongoose.model("Screen",screenSchema,"Screens");