const mongoose = require("mongoose");

const Comment = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "Comments",
  },
  userName: {
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
}, { timestamps: true });

const TicketType = mongoose.Schema({
  name: {
    type: String,
    required: true,
    ref: "TicketTypes",
  },
  price: {
    type: Number,
    required: true,
  },
  // Duration can be unlimited or limited to a specific number of days
  duration: {
    type: String,
  }
});

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
  city: {
    type: String,
    required: true,
  },
  ticketTypes: [TicketType],
  tags: [String],
  comments: [Comment],
  users: [String],
});
module.exports = mongoose.model("Providers", ProvidersSchema);