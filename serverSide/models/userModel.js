const mongoose=require("mongoose");
const bcrypt=require('bcryptjs')

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

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

const User=mongoose.model("User",userSchema);

module.exports=User;