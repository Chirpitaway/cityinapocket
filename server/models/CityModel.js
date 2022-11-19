const mongoose = require("mongoose");
const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "City",
  },
  maxLat: {
    type: Number,
    required: true,
  },
  maxLng: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("City", citySchema);
