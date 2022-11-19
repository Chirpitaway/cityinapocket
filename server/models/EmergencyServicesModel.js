const mongoose = require("mongoose");
const EmergencyServicesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
}, { timestamps: true });
module.exports = mongoose.model("Emergency", EmergencyServicesSchema);
