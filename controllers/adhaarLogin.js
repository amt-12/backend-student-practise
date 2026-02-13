const RegisterModel = require("../model/Register.model");
const { loginValidation } = require("../service/validation_schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adhaarLogin = async (req, res, next) => {
 try {
  const loginData = await loginValidation.validateAsync(req.body);
  //step 1: req and validate
  console.log("loginData:", loginData);

  //Step2 :data extract
  const { username, password } = loginData;

  
  console.log("username:", username);
  //Step 3 : verify MONGO DB
  const loginDataCheck = await RegisterModel.findOne({
    username: username,
  });
  console.log("loginDataCheck:", loginDataCheck);
  if (!loginDataCheck) {
    return res.status(400).json({ message: "User Not Found, Please Register" });
  }

  const isPasswordMatch = await bcrypt.compare(password, loginDataCheck.password);

if (!isPasswordMatch) {
  return res.status(400).json({ message: "Invalid Password" });
}
const token = jwt.sign({ userId: loginDataCheck._id }, "sdfdsfdsfdsfdsfdsf", { expiresIn: "1h" });
  //Step 5 : response
  res.status(200).json({ message: "Registration Successful" ,jwtToken:token});
 } catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
};
module.exports = adhaarLogin;
