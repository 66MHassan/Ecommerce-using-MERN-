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

exports.createUser= async(req,res)=>{
    const{name,email}=req.body;
    try{

        const newUser=new User({name,email});
        await newUser.save();
        res.send(newUser);

    } catch (err){
        console.log(err)
        res.status(500).send("interval server")
    }

    
    res.send("done");
}