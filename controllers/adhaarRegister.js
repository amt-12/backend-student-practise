const RegisterModel = require("../model/Register.model");
const { registerValidation } = require("../service/validation_schema");
const bcrypt = require("bcrypt");
const adhaarRegister = async (req, res, next) => {
 try {
  const registerData = await registerValidation.validateAsync(req.body);
  //step 1: req and validate
  console.log("registerData:", registerData);

  //Step2 :data extract
  const { email, password} = registerData;

  
  console.log("email:", email);
  //Step 3 : verify MONGO DB
  const registerDataCheck = await RegisterModel.findOne({
    email: email,
  });
  console.log("registerDataCheck:", registerDataCheck);
  if (registerDataCheck) {
    return res.status(400).json({ message: "email already exists" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  //Step4 : store in MONGO DB
  const registerModel = new RegisterModel({
    email: email,
    password: hashPassword,
    provider: "myLocalUser",
    
  });

  await registerModel.save();
  //Step 5 : response
  res.status(200).json({ message: "Registration Successful" });
 } catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
};
module.exports = adhaarRegister;
