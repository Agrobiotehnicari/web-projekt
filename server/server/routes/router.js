const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const route = express.Router();
const authController = require("../controllers/authController.js");
const kvizController = require("../controllers/kvizController.js");
const resultController = require("../controllers/resultController.js");

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
route.get("/kviz/trending", kvizController.getTrendingKviz);
route.get("/kviz/:id", kvizController.findById);
route.get("/kviz/user/:id", kvizController.findByUserId);
route.get("/kviz/user/:id/solved", kvizController.findUserSolved);
route.put("/kviz/:id", kvizController.update);
route.delete("/kviz/:id", kvizController.delete);

route.post("/result", resultController.create);
route.get("/result", resultController.find);
route.get("/result/:id", resultController.userResult);
route.get("/result/user/:id", resultController.finbByUserId);
route.get("/result/kviz/:id", resultController.findByKvizId);
route.delete("/result/:id", resultController.delete);

module.exports = route;
