require("dotenv").config();
// creating the .env file #1,, adding port & database link in .env
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");
const port= process.env.PORT|| 3000
const app = express();
app.use(express.json());
app.use(express.urlencoded());
// adding try catch to get the errors #2
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } 
  catch (error) {
    console.log(`error in DataBase connection ${error}`);
    
  }
};
connectDB();

app.use("/api", bookRoutes);

// checking server #3 => server is running and DB is connected // checking the models














//changed the port number as it was added in the .env file#3
app.listen(port, () => console.log("Library Server Running"));
