const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const RegisterUser = asyncHandler(async (req, res) => {
  const { name, password ,email } = req.body;
  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please included all fields");
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //create user
  const user = await User.create({
    email:email,
    name: name,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: name,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new error("Invalid user data");
  }
});
const LogInUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  //check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      token: generateToken(user._id),
      message:"Login suscesfull"
    });
  } else {
    res.status(401);
    throw new Error("Ivalid credentials");
  }
});
//Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = { RegisterUser ,LogInUser};
