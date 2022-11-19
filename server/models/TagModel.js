const mongoose = require("mongoose");
const ProvidersSchema = mongoose.Schema({
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
module.exports = mongoose.model("Providers", ProvidersSchema);