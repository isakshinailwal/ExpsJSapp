const mongoose = require("mongoose");
const { Schema } = mongoose;
const screenSchema = require("./screen");

const cinemaSchema=new mongoose.Schema({
    cinemaName:{ type:String, required:true },
    city:{ type:String, required:true },
    slots:[],
    screens:{  type:[ String] }

})

module.exports = new mongoose.model("Cinema",cinemaSchema,"Cinemas");
