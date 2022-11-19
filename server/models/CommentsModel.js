const mongoose = require("mongoose");
const CommentsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "Comments",
  },
  providerId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // If no rating, then it's a comment, if there is a rating, then it's a review
  rating: {
    type: Number,
  },
});
module.exports = mongoose.model("Comments", CommentsSchema);