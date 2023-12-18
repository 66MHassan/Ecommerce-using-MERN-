const User =require("../models/userModel.js")
const bcrypt=require('bcryptjs')


exports.register= async(req,res)=>{
    
    try{
        // const{name,email,password}=req.body;
        // const newUser=new User({name,email,password});
        // await newUser.save();
        const newUser=await User.create(req.body)
        res.send({msg:"user Created",token: await newUser.genarateToken(),id:newUser._id});
        console.log(newUser)

        

    } catch (err){
        console.log(err)
        res.status(500).send("interval server")
    }

    
   
}


exports.login= async (req,res)=>{
    

    try{
        const {email,password}=req.body;
        console.log(email+password)
        const userExist=await User.findOne({email})
        if(!userExist){
            res.send("user not exists")
        }
        const isPasswordValid=await bcrypt.compare(password,userExist.password)
        if(isPasswordValid){
            res.send({msg:"sucessfully Login", token: await userExist.genarateToken()})
        }else{
            res.status(401).send("password invild")
        }
    }catch(err){
        res.status(401).send(`Error is :${err}`)
    }
    

}


exports.protect=async (req,res,next)=>{
    //Getting token is they are in header section or not
let token
if(req.headers.authorization && req.headers.authorization.startsWith("bearer")){
    token=req.headers.authorization.split(" ")[1]
}
console.log(token)
    
    next();
}