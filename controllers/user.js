const mongoose = require('mongoose');
const User =require('../Models/user');
mongoose.connect("mongodb://localhost:27017/MovieApp");

module.exports.GetAllUsers= async (req,res)=> {
    
var Users = await User.find();
res.send(Users);

};


module.exports.Create= async (req,res)=> {
    
  var Users = await User.create(req.body);
  console.log("Created");
  res.send(Users);
  
  };

module.exports.Login=async (req,res)=>{
 
    var SearchObject = req.body;
    console.log(SearchObject);
    var user = await User.findOne(SearchObject);
  
      if(user) {res.statusCode = 200;res.send(user);}
      else return res.send(null);
}
  
