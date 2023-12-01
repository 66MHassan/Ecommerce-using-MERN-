const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

})

const User=mongoose.model("User",userSchema);

module.exports=User;