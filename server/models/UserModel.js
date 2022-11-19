const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "User",
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  lastLocation: {
    lat: Number,
    lng: Number,
    city: String,
  },
  city:{
    type:String,
    required:true,
  },
  permission:{
    type:String,
    default:0,
  },
  tickets: [String],
});
module.exports = mongoose.model("User", userSchema);
