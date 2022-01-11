const mongoose=require("mongoose");

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
    movies:[{
        MovieID:{
            type:String 
        },
        Slot:[{
            type:String 
        }]
    }],

    slot:{
        type:[String],
        required:true
    }

})

module.exports=new mongoose.model("Cinema",cinemaSchema,"Cinemas");
