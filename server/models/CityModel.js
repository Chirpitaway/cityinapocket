const mongoose = require("mongoose");
const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "City",
  },
  centerLat: {
    type: Number,
    required: true,
  },
  centerLng: {
    type: Number,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("City", citySchema);
