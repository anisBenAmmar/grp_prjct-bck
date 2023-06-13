const jwt = require('jsonwebtoken');
require("dotenv").config();

// Generate JWT
function generateToken(payload) {
  return jwt.sign(payload,process.env.SECRET_KEY );
}

// Verify JWT
function verifyToken(token, secretKey) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null; // Invalid token
  }
}

// Middleware for authenticating JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null || token === undefined) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    next();
  });
}

module.exports = {
  generateToken,
  verifyToken,
  authenticateToken,
};

  
  
