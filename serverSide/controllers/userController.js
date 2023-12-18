const User =require("../models/userModel.js")
const bcrypt=require('bcryptjs')

exports.getAllUsers=async (req,res)=>{
   try{
    const data = await User.find()
    res.send(data)
   }catch(err){
    console.log(err)
    res.status(500).send("we can't get your data")
   }
}