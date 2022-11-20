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
  try {
    // Try to see if the user already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    } else {
      const user = await User.create({
        email: email,
        name: name,
        password: hashedPassword,
        city: city,
      });

      res.status(201).json({
        _id: user.id,
        name: name,
        token: generateToken(user._id),
        city: city,
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
  try {
    try {
      const user = await User.findOne({ email: email });
      //check user and passwords match
      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
          _id: user.id,
          name: user.name,
          token: generateToken(user._id),
          city: user.city,
        });
      } else {
        res.status(401);
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      res.status(500);
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error logging in user");
  }
});

// Get list of all users
const GetUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error("Error getting users");
  }
});

const RegisterSpecial = asyncHandler(async (req, res) => {
  const { email, name, password, city } = req.body;

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  try {
    // Try to see if the user already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    } else {
      const user = await User.create({
        email: email,
        name: name,
        password: hashedPassword,
        city: city,
        permission: "validator",
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

const EditUser = asyncHandler(async (req, res) => {
  const { name, email, city } = req.body;
  console.log(req.body)
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.city = city || user.city;
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error)
    res.status(500);
    throw new Error("Error updating user");
  }
});

const EditOwnUser = asyncHandler(async (req, res) => {
  const { name, email, city } = req.body;
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.city = city || user.city;
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error updating user");
  }
});

const DeleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.status(200).json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error deleting user");
  }
});

module.exports = {
  RegisterUser,
  LogInUser,
  GetUsers,
  RegisterSpecial,
  EditUser,
  EditOwnUser,
  DeleteUser,
};