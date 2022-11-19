const mongoose = require("mongoose");
const ProvidersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "Providers",
  },
  // Type of provider - e.g. restaurant, museum, transportation etc.
  type: {
    type: String,
    required: true,
  },
  ticketTypes: [String],
  city: {
    type: String,
    required: true,
  },
  tags: [String],
  comments: [String],
  users: [String],
});
module.exports = mongoose.model("Providers", ProvidersSchema);