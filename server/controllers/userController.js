const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../helpers/generateToken");
const User = require("../models/UserModel");

// Register a new user
const RegisterUser = asyncHandler(async (req, res) => {
  const { name, password, email, city } = req.body;

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  try{
    // Try to see if the user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400);
      throw new Error("User already exists");
    } else {
      const user = await User.create({
        email: email,
        name: name,
        password: hashedPassword,
      });

      res.status(201).json({
        _id: user.id,
        name: name,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error creating user");
  }
});

// Login user
const LogInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  //check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

module.exports = { RegisterUser, LogInUser };
