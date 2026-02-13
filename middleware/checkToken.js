const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization?.split(" ")[1];
    console.log("jwtToken:", jwtToken);
    if (!jwtToken) {
      return res.status(401).json({ message: "Unauthorized, Token Missing" });
    }
    const decoded = jwt.verify(jwtToken, "sdfdsfdsfdsfdsfdsf");
    console.log("decoded:", decoded);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = checkToken;
