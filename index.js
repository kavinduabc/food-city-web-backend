import express from "express";
import mongoose from "mongoose";


let app = express()




//** create a database connection for web site  */
const mongoUrl = "mongodb+srv://admin:1234@cluster0.bbcds.mongodb.net/food-city?retryWrites=true&w=majority";

mongoose.connect(mongoUrl);
let connection = mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb connection is successfully")
})



//** create a listing method */
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})