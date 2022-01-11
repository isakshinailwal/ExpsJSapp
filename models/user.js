const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

const userSchema=new mongoose.Schema({
    name:{
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
    password:{
        type:String, 
        required:true
    }
    
})

module.exports = mongoose.model("users",userSchema,"users");