const adhaarLogin = require("../../controllers/adhaarLogin");
const adhaarRegister = require("../../controllers/adhaarRegister");
const getAdhaarRegisterUser = require("../../controllers/getAdhaarRegisterUser");
const googleLogin = require("../../controllers/googleLogin");
const checkToken = require("../../middleware/checkToken");


const Waiter = require("express").Router()

Waiter.post("/adhaarRegister",adhaarRegister)
Waiter.post("/adhaarLogin",adhaarLogin)
Waiter.post("/auth/google",googleLogin)
Waiter.get("/getAdhaarRegisterUser",checkToken,getAdhaarRegisterUser)




module.exports = Waiter;
