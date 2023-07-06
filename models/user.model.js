const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    pseudo: {
      type: String,
      required: true,
    },
    expenses: {
      type: Number,
      default: 0,
    },

    debt: {
      type: Number,
      default: 0,
    },
    reasons: {
      type: [String],
    },
    refunds: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
