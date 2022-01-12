const mongoose = require('mongoose');
const User =require('../Models/user');


module.exports.getAllUsers= async (req,res)=> {
    
let Users = await User.find();
res.send(Users);

};


module.exports.create= async (req,res)=> {
    
  let Users = await User.create(req.body);
  console.log("Created");
  res.send(Users);
  
  };

module.exports.login=async (req,res)=>{
 
    let SearchObject = req.body;
    console.log(SearchObject);
    let user = await User.findOne(SearchObject);
  
      if(user) 
      {
        res.statusCode = 200;
        res.send(user);}
      else 
       return res.send(null);
}
  
