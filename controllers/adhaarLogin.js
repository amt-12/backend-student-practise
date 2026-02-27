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
  const { email, password } = loginData;

  
  console.log("email:", email);
  //Step 3 : verify MONGO DB
  const loginDataCheck = await RegisterModel.findOne({
    email: email,
  });
  console.log("loginDataCheck:", loginDataCheck.role);
  if (!loginDataCheck) {
    return res.status(400).json({ message: "User Not Found, Please Register" });
  }

  const isPasswordMatch = await bcrypt.compare(password, loginDataCheck.password);

if (!isPasswordMatch) {
  return res.status(400).json({ message: "Invalid Password" });
}
const userPayload = {
  userId: loginDataCheck._id,
  role: loginDataCheck.role,
  email: email,
  password: password,
};
const token = jwt.sign({ userId: userPayload }, "sdfdsfdsfdsfdsfdsf", { expiresIn: "1h" });
  //Step 5 : response
  res.cookie("jwtToken",token,
    {
      httpOnly:true,
      maxAge:3600000,
      
    })

  res.status(200).json({ message: "Login Successful"});
 } catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
};
module.exports = adhaarLogin;
