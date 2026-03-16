const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routes = require('./routes/index')
const chief = express()
chief.use(express.json(
    {
        limit:"10mb",
        extended:true
        
    }
))


chief.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

// chief.use("/getStatus",(req,res,next)=>{
//     const registerData = req.body;
//     console.log("registerData:",registerData)

//     res.json({status:"Server is running fine"})
//     console.log("Sever Connected")
// })

chief.use(routes)

mongoose.connect("mongodb+srv://amrit0207232_db_user:TouzmVXX8mOJ1OdO@cluster-backend.f7alc7h.mongodb.net/")
.then((kuchBhi)=>{
    const PORT = 5002;
    chief.listen(PORT)
    console.log("Connected to MongoDB")
    console.log(`http://localhost:${PORT}`)
})
.catch((amrit)=>{
    console.log("Connection failed",amrit)
})
