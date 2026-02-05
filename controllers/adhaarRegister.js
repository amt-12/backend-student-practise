const RegisterModel = require("../model/Register.model");
const { registerValidation } = require("../service/validation_schema");

const adhaarRegister = async (req, res, next) => {
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
    return res.json({ status: "Username already exists" });
  }
  //Step4 : store in MONGO DB
  const registerModel = new RegisterModel({
    username: username,
    password: password,
    phoneNumber: phoneNumber,
  });

  await registerModel.save();
  //Step 5 : response
  res.json({ status: "Registration Successful" });
};
module.exports = adhaarRegister;
