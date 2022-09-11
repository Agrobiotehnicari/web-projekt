const express = require("express");
const passport = require("passport");
const route = express.Router();
const authController = require("../controllers/authController.js");

route.get("/", (req, res) => {
  res.send("Crud App!");
});

route.post("/login", passport.authenticate("local"), authController.login);
route.get("/user", authController.user);
route.get("/logout", authController.logout);
route.post("/register", authController.register);

module.exports = route;
