const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get  token from header
      token = req.headers.authorization.split(" ")[1];
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.permission !== 'user' || req.user.permission !== 'admin') {
        res.status(401);
        throw new Error("Not authorized");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

const admin = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get  token from header
      token = req.headers.authorization.split(" ")[1];
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.permission !== 'admin') {
        res.status(401);
        throw new Error("Not authorized");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

const special = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get  token from header
      token = req.headers.authorization.split(" ")[1];
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.permission !== 'validator') {
        res.status(401);
        throw new Error("Not authorized");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect, admin, special };