const mongoose = require("mongoose");
const ProvidersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "City",
  },
 type:{
    type:String,
    required:true,
 },

 ticketTypes: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  comments:[String],
  users: [String],
});
module.exports = mongoose.model("Providers", ProvidersSchema);