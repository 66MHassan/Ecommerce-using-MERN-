const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter");
const port = 8000;
const uri = "mongodb+srv://hassankhan662000:SPyP8lFLG9cfZLa8@ecom.8t3y4v4.mongodb.net/HassanStore?retryWrites=true&w=majority";

app.use(express.json());

// Connecting to the Database
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("Database is connected");
}).catch((err) => {
  console.error("Error connecting to the database:", err);
});

// User Routing
app.use("/api/v1/product", userRouter);

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});