const mongoose=require("mongoose");

const productSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        requried:[true,"Price must be requried"]
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","hp","dell"],
            message:"this value not supported"
        },
        
    },
    category:{
        type:String,
    }
})

const Product=mongoose.model("Product",productSchema);
module.exports=Product;