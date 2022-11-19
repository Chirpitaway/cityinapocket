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
  duration:{
    type:String,
    required:true,
  },
  provider: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("TicketTypes", ticketTypesSchema);
