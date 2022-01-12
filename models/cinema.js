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
    screens:[{ 
        type: Schema.Types.ObjectId, 
        ref: 'Screen'
    }]
  

})

module.exports = new mongoose.model("Cinema",cinemaSchema,"Cinemas");
