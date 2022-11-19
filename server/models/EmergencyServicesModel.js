const mongoose = require("mongoose");
const  EmergencyServicesSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "EmergencyServices",
  },
  name: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  city: {
    type: string,
    required: true,
  },
});
module.exports = mongoose.model("Emergency", EmergencyServicesSchema);
