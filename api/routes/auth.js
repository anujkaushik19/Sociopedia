const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



// env variables
require("dotenv").config();





//REGISTER a user
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      occupation: req.body.occupation,
      from: req.body.from,
      profilePicture: req.body.profilePicture,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A USER

router.put("/update/:userId", async (req, res) => {
  try {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    console.log("inside updated user");
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        occupation: req.body.occupation,
        from: req.body.from,
        profilePicture: req.body.profilePicture,
        coverPicture: req.body.coverPicture,
        desc: req.body.desc,
      }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// send otp verification email

module.exports = router;
