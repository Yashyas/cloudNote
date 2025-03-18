const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "hellotest1@";

// test api 
router.get("/test", (req, res) => {
  res.json({ message: "API is working fine!" });
});
// SignUp end point POST "api/auth/createUser" 
router.post(
  "/signup",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

// Login end point POST "api/auth/login" 
router.post(
  "/login",
  [
    body("email","Enter a valid Email").isEmail(),
    body("password","Password can't be empty").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try {
      // find if user exists 
      let user =await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }
      // find if password is correct
      const passwordCompare =await bcrypt.compare(password,user.password);
      if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }

      // send auth token if pssword is correct 
      const data = {
        user: {
          id: user.id,
        }
      }
      // const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });
      
      // permanent auth token 
        const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken });
      

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
)

// Login end point POST "api/auth/login"
router.post('/getuser',fetchuser,async (req,res)=>{
  try {
    userId =req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal server error");
  }
})

module.exports = router;
