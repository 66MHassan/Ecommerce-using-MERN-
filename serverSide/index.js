const express = require("express");
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter");
const productRouter=require("./routes/productRouter")
const bodyParser = require('body-parser');


app.use(bodyParser.json());

const uri=process.env.MONGODB_URI;
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