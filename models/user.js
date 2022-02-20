const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;


const userSchema = new mongoose.Schema({
    userName:{
        type:String, 
        required:true
    },
    mobile:{
        type:String,  
        required:true

    },
    email:{
        type:String, 
        required:true
    },
    pwd:{
        type:String, 
        required:true
    }
    
})

module.exports = mongoose.model("User",userSchema,"Users");



