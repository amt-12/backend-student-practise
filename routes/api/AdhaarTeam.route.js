const adhaarLogin = require("../../controllers/adhaarLogin");
const adhaarRegister = require("../../controllers/adhaarRegister");
const getAdhaarRegisterUser = require("../../controllers/getAdhaarRegisterUser");
const checkToken = require("../../middleware/checkToken");


const Waiter = require("express").Router()

Waiter.post("/adhaarRegister",adhaarRegister)
Waiter.post("/adhaarLogin",adhaarLogin)
Waiter.get("/getAdhaarRegisterUser",checkToken,getAdhaarRegisterUser)




module.exports = Waiter;
