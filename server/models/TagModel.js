const mongoose = require("mongoose");
const TagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        ref: "Tags",
    },
    type: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Tags", TagSchema);