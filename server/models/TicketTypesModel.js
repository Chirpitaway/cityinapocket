const mongoose = require("mongoose");
const ticketTypesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "TicketTypes",
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  // Duration can be unlimited or limited to a specific number of days
  duration: {
    type: String,
  },
  provider: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("TicketTypes", ticketTypesSchema);
