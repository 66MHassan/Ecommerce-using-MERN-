

exports.getAllUsers=(req,res)=>{
    res.send("this is my home page ")
}

exports.createUser=(req,res)=>{
    console.log(req.body);
    res.send("done");
}