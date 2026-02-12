const RegisterModel = require("../model/Register.model");
const { registerValidation } = require("../service/validation_schema");

const adhaarRegister = async (req, res, next) => {
 try {
  const registerData = await registerValidation.validateAsync(req.body);
  //step 1: req and validate
  console.log("registerData:", registerData);

  //Step2 :data extract
  const { username, password, phoneNumber } = registerData;

  
  console.log("username:", username);
  //Step 3 : verify MONGO DB
  const registerDataCheck = await RegisterModel.findOne({
    username: username,
  });
  console.log("registerDataCheck:", registerDataCheck);
  if (registerDataCheck) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  //Step4 : store in MONGO DB
  const registerModel = new RegisterModel({
    username: username,
    password: hashPassword,
    phoneNumber: phoneNumber,
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
