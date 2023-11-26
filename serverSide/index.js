const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter");
const productRouter=require("./routes/productRouter")
const bodyParser = require('body-parser');

const uri = "mongodb+srv://hassankhan662000:SPyP8lFLG9cfZLa8@ecom.8t3y4v4.mongodb.net/HassanStore?retryWrites=true&w=majority";

app.use(bodyParser.json());


// Connecting to the Database
mongoose.connect(uri, {
  // useUnifiedTopology: true,these are now not use in the latest version
  // useNewUrlParser: true,
}).then(() => {
  console.log("Database is connected");
}).catch((err) => {
  console.error("Error connecting to the database:", err);
});

//Middleware for User Routing
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products",productRouter)


const port = 8000;
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});