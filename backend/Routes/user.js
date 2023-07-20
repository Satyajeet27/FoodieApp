const { Router } = require("express");
const User = require("../model/user");
const { validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = Router();
const jwtSecretKey = "thisisrandomstringforJWTtoken";
router.post(
  "/createuser",
  body("name").isLength({ min: 5 }),
  body("email").isEmail(),
  body("password", "password length should be atleast 6").isLength({ min: 6 }),
  async (req, res) => {
    const { name, email, password, location } = req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    try {
      await User.create({
        name,
        email,
        location,
        password,
      });
      return res.status(201).send({ message: "user created" });
    } catch (error) {
      console.log(error);
      return res.status(401).send({ error: "error in creating user" });
    }
  }
);

router.post(
  "/login",
  body("email", "please enter valid email").isEmail(),
  async (req, res) => {
    const { email, password } = req.body;

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    try {
      const userData = await User.findOne({ email });
      if (!userData) return res.status(400).send({ error: "user not found" });
      const verifyPassword = await bcrypt.compare(password, userData.password);
      if (!verifyPassword)
        return res.status(400).send({ error: "Incorrect Password" });

      const payload = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(payload, jwtSecretKey);
      return res.send({ message: "user found", authToken });
    } catch (err) {
      console.log(err);
      res.send({ error: "error in request" });
    }
  }
);
module.exports = router;
