const mongoose = require("mongoose");
const ticketsSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    ref: "City",
  },
 userId: {
    type:String,
    required: true,
  },
  ExpiresAt: {
    type:Date,
    required: true,
  },
  redeemedAt: {
    type: Date,
    required: true,
  },
  used:{
    type:Boolean,
    required:true,
  }
});
module.exports = mongoose.model("Tickets", ticketsSchema);