const express = require("express");
const router = express.Router();
const User = require("../models/Request");

router.post("/request", async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    !user && res.status(404).json("user not found");

    const newRequest = new Request({
      profilePicture: user.profilePicture,
      username: user.username,
    });
    const request = await newRequest.save();
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});
