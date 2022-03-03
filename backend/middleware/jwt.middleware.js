const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(400).json({ message: "Token not found" });
  try {
    const tokenInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(tokenInfo);
    //If you have req.payload, change line 12 to:
    //req.payload = tokenInfo;
    req.user = tokenInfo;
    next();
  } catch (error) {
    return res.json(error);
  }
};

// Export the middleware so that we can use it to create a protected routes
module.exports = {
  isAuthenticated,
};
