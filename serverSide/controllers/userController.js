

exports.getAllProducts=(req,res)=>{
    res.send("this is my home page ")
}

exports.createProduct=(req,res)=>{
    console.log(req.body);
    res.send("done");
}