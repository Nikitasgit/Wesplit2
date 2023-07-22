const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    users: {
      type: [Object],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("group", groupSchema);
