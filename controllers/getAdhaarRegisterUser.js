const RegisterModel = require("../model/Register.model");
const { registerValidation } = require("../service/validation_schema");

const getAdhaarRegisterUser = async (req, res, next) => {
 try {
  

  const registerData = await RegisterModel.find();
  
  console.log("registerData:", registerData);

  if (!registerData) {
    return res.status(400).json({ message: "No Register User !!" });
  }

  res.status(200).json(
    { 
      message: "Register User Fetch Successful !!",
      registerUserList: registerData
    }
  );

 } catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
};
module.exports = getAdhaarRegisterUser;
