const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
    },
    mutualFriends: {
      type: Number,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", RequestSchema);
