const adhaarRegister = require("../../controllers/adhaarRegister");

const Waiter = require("express").Router()

Waiter.post("/adhaarRegister",adhaarRegister)




module.exports = Waiter;
