const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    users: { type: [Object], required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("group", groupSchema);
