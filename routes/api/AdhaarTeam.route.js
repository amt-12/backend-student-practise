const adhaarLogin = require("../../controllers/adhaarLogin");
const adhaarRegister = require("../../controllers/adhaarRegister");
const getAdhaarRegisterUser = require("../../controllers/getAdhaarRegisterUser");


const Waiter = require("express").Router()

Waiter.post("/adhaarRegister",adhaarRegister)
Waiter.post("/adhaarLogin",adhaarLogin)
Waiter.get("/getAdhaarRegisterUser",getAdhaarRegisterUser)




module.exports = Waiter;
