const mongoose=require("mongoose");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

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

userSchema.methods.genarateToken=async function(){
    try{
        return  jwt.sign({
            userId:this._Id,
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"
        }
        )

    }catch(err){
        console.log(err)
    }
}

const User=mongoose.model("User",userSchema);

module.exports=User;