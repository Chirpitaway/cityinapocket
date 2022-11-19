const mongoose = require("mongoose");
const ticketsSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    ref: "Tickets",
  },
  userId: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  redeemedAt: {
    type: Date,
    required: true,
  },
  // Validated by the provider
  used: {
    type: Boolean,
    required: true,
  }
}, { timestamps: true });
module.exports = mongoose.model("Tickets", ticketsSchema);