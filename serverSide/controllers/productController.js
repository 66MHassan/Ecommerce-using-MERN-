const Product=require("../models/productModel");

exports.createProduct= async (req,res) => {
    const {name,price,featured,company,category}=req.body;
try{
    const newProduct=  new Product({name,price,featured,company,category});
   await newProduct.save();

   res.send(newProduct)

} catch(err){
    console.log(err)
    res.status(500).send("Server is not responed or see the code")
}
    
}
exports.getAllProducts= async (req,res) => {
    
   try{
    console.log(req.query)
    const data=await Product.find(req.query);
    res.status(200).send(data);
    console.log(data)
   }catch(err){
    console.log(err)
    res.status(500).send("We can't get AllProducts")
   }
}

exports.getProduct= async (req,res)=>{
    try{
        const id=req.params.id;
        const data= await Product.findById(id);
        res.status(200).send(data);
        console.log(data);

    }catch(err){
        console.log(err)
        res.status(404).send("Record not Found")
    }
}

exports.deleteProduct= async (req,res) => {
    const id =req.params.id;
    console.log(`id is ${id}`)
    await res.send("deleted successfully")
}

exports.updateProduct= async (req,res) => {
    const productId=req.params.id;
    try{
        const updatedProduct = await Product.updateOne({ _id: productId }, { $set: req.body });
        res.status(200).send(updatedProduct)
        console.log(updatedProduct)

    }catch(err){
        console.log(err)
        res.status(404).send("Not found!")
    }
}