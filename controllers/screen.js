const mongoose = require('mongoose');
const Booking = require('../models/booking');
const Cinema = require('../models/cinema');
const Screen = require('../models/screen');


module.exports.getAllScreens = async(req,res)=> {

   
    res.send(await Screen.find({}));
    res.send('Success');
}

module.exports.createScreen  = async(req,res)=> {
    let record = req.body;
    let Result = await Screen.create(record);
    res.send(Result);
    
}
module.exports.delete =async (req,res)=> {

    let id = req.params.id;
    var Result = await Screen.deleteOne({ _id: id });
    res.send(Result);
  }
