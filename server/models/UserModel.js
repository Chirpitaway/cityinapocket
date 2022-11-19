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
  tickets: [String],
});
module.exports = mongoose.model("User", userSchema);
