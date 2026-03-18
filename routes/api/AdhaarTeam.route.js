const adhaarLogin = require("../../controllers/adhaarLogin");
const adhaarRegister = require("../../controllers/adhaarRegister");
const getAdhaarRegisterUser = require("../../controllers/getAdhaarRegisterUser");
const googleLogin = require("../../controllers/googleLogin");
const uploadImage = require("../../controllers/uploadImage");
const uploadMultipleImages = require("../../controllers/uploadMultipleImages");
const checkToken = require("../../middleware/checkToken");


const Waiter = require("express").Router()
const upload = require("../../middleware/upload");

Waiter.post("/adhaarRegister",adhaarRegister)
Waiter.post("/adhaarLogin",adhaarLogin)
Waiter.post("/auth/google",googleLogin)
Waiter.get("/getAdhaarRegisterUser",checkToken,getAdhaarRegisterUser)
Waiter.post("/uploadImage", upload.single('file'), uploadImage)
Waiter.post("/uploadMultipleImages", upload.array('files', 10), uploadMultipleImages) // Max 10 files

module.exports = Waiter;
