const Waiter = require("express").Router()
const adhaarTeam = require("./AdhaarTeam.route")
const panTeam = require("./Pan.route")

Waiter.use("/adhaarTeam",adhaarTeam)


Waiter.use("/panTeam",panTeam)



module.exports = Waiter;
