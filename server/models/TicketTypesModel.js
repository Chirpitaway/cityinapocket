const mongoose = require("mongoose");
const ticketTypesSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    ref: "City",
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
