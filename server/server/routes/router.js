const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const route = express.Router();
const authController = require("../controllers/authController.js");
const kvizController = require("../controllers/kvizController.js");

route.get("/", (req, res) => {
  res.send("Crud App!");
});

route.post("/login", passport.authenticate("local"), authController.login);
route.get("/user", authController.user);
route.get("/logout", authController.logout);
route.post("/register", authController.register);

route.post("/kviz", kvizController.create);
route.post("/kviz/:id/rating", kvizController.addRating);
route.get("/kviz", kvizController.find);
route.get("/kviz/:id", kvizController.findById);
route.put("/kviz/:id", kvizController.update);
route.delete("/kviz/:id", kvizController.delete);

module.exports = route;
