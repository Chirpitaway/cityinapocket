const mongoose = require("mongoose");
const CommentsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "Comments",
  },
 providerId:{
    type:String,
    required:true,
 },

 message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Comments", CommentsSchema);