const express=require("express")
const app=express();
const port=8000;

app.use(express.json());

const getAllProducts=(req,res)=>{
    res.send("this is my home page ")
}

const createProduct=(req,res)=>{
    console.log(req.body);
    res.send("done");
}

const router=express.Router("/api/v1/product")
router.route("/")
.get(getAllProducts).post(createProduct);

// app.get("/api/v1/product",getAllProducts)
// app.post("/api/v1/product",createProduct)



app.listen(port,()=>{
console.log(`sever is runing at port no ${port}`);
})
