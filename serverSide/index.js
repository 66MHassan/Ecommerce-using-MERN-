const express=require("express")
const app=express();
const userRouter=require("./routes/userRouter")
const port=8000;

app.use(express.json());

//User Routing 
app.use("/api/v1/product",userRouter)



app.listen(port,()=>{
console.log(`sever is runing at port no ${port}`);
})
