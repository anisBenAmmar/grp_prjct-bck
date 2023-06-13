const { Users } = require("../models/user.model")
const JwtController = require("../controllers/Jwt.controller")

module.exports.register = (req, res) => {
    Users.findOneAndUpdate({ email: req.body.email }, req.body, { upsert: true, new: true })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

module.exports.login = (req, res) => {
    // Find the user by username
    const user = Users.find({ email: req.body.email, password:req.body.password })
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
      // Create a JWT token
      const token = JwtController.generateToken({ userId: user.id });
  
      // Return the token to the client
     // res.json({ "token":token,"user":user });
      res.json({ token });
}