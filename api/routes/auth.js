const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const axios = require('axios')

// env variables
require("dotenv").config();


const url = process.env.EMAIL_API_KEY;

//REGISTER a user
router.post("/register", async (req, res) => {
  console.log('user is',req.body);
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
    console.log('new iser is',newUser);
    const user = await newUser.save();
    console.log("done");
    res.status(200).json(user);
  } catch (err) {
    console.log("error is", err);
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
    const validity = req.body.password === user.password;
    !validPassword && !validity &&  res.status(400).json("wrong password");
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

router.post("/email", async (req, res) => {
  console.log('triggered')
  try {
    const { email } = req.body;
    const otp = Math.floor(Math.random() * 10000);
    if (otp < 1000 || otp > 9999) otp = 6969;
    console.log(otp);

    const response = await axios({
      method: "post",
      url: "https://api.sendinblue.com/v3/smtp/email",
      headers: {
        "api-key": url,
        "content-type": "application/json",
      },
      data: {
        sender: {
          name: "Sociopedia",
          email: "anujkaushik.kaushik56@gmail.com",
        },
        to: [
          {
            email: email,
            name: 'anuj',
          },
        ],
        subject: "Registration OTP Sociopedia",
        htmlContent: `<p>Your registration otp for Sociopedia is ${otp}</p>`,
        replyTo: {
          email: "anujkaushik.kaushik56@gmail.com",
          name: "Sociopedia",
        },
      },
    });

    console.log("Email sent successfully:", response.data);
    // console.log('Email sent successfully:');
    res.status(200).json(otp);
  } catch (error) {
    console.log('error is ')
    res.status(500).json( error );
  }
});

module.exports = router;
