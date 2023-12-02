const User =require("../models/userModel.js")

exports.getAllUsers=async (req,res)=>{
   try{
    const data = await User.find()
    res.send(data)
   }catch(err){
    console.log(err)
    res.status(500).send("we can't get your data")
   }
}

exports.register= async(req,res)=>{
    
    try{
        // const{name,email,password}=req.body;
        // const newUser=new User({name,email,password});
        // await newUser.save();
        const newUser=await User.create(req.body)
        res.send(newUser);
        console.log(newUser)

    } catch (err){
        console.log(err)
        res.status(500).send("interval server")
    }

    
   
}