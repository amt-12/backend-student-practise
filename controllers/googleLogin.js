const { default: axios } = require("axios");
const RegisterModel = require("../model/Register.model");
const jwt = require("jsonwebtoken");
const googleLogin = async (req, res,next) => {
    try {
        const { access_token } = req.body;
        console.log("Access Token:", access_token);

        // Get user info from Google
        const googleRes = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
    
        const { email, name, picture } = googleRes.data;
        const checkGoogleUser = await RegisterModel({
            email:email
        })
        if (checkGoogleUser) {
            return res.status(400).json({ message: "User already exists, Please Login" });
        }
        // Check if user exists
        let user = await RegisterModel.findOne({ email:email });
    
        if (!user) {
          user = await RegisterModel.create({
            name,
            email,
            avatar: picture,
            provider: "google",
          });
        }
    
        const token = jwt.sign({ userId: googleRes.data }, "sdfdsfdsfdsfdsfdsf", { expiresIn: "1h" });

    
        res.json({
          message: "Google login success",
          token,
          user,
        });
    
      } catch (error) {
            next(error);
            console.log("Error in Google login:", error);
        res.status(500).json({ message: "Google auth failed" });
      }

}


module.exports = googleLogin;