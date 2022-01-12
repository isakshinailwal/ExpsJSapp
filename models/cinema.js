const mongoose = require("mongoose");
const { Schema } = mongoose;
const cinemaSchema=new mongoose.Schema({
    cinemaName:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    capacity:{
        type:Number 
    },
    seats:{
        type:[String],
        required:true 
    },
    status:{
        type:String,
        required:true
    },
    audis:[{
        type:String,
        required:true
    }],
    slots:[{
        type:Schema.Types.ObjectId,
        ref:"Slot"
    }]
  

})

module.exports = new mongoose.model("Cinema",cinemaSchema,"Cinemas");
