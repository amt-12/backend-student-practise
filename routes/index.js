const Waiter = require("express").Router()
const apiRoutes = require("./api/index")



Waiter.use("/api",apiRoutes)




// Removed catch-all handler to allow proper routing
// Waiter.use("/api",(req,res,next)=>{
//     res.json({status:"API route no found"})
//     next()
// })
// 





module.exports = Waiter;