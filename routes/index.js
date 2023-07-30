var express = require("express");
var router = express.Router();
const UserModel = require("../model/userModel");
const Data = require("../model/data");

router.get("/", function (req, res, next) {
  res.render("index", { title: "  TODO APPLICATION" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login Page" });
});

router.post("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user === null) {
      return res.send(`email not found. <a href="/login">login again</a>`);
    }
    if (user.password !== password) {
      return res.send(`Incorrect Password. <a href="/signin">signin</a>`);
    }
    res.redirect("/profile");
  } catch (error) {
    console.log(err);
  }
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Sign Up Page" });
});
router.post("/signup", async function (req, res, next) {
  try {
    const newuser = new UserModel(req.body);
    await newuser.save();
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
});

router.get("/profile", async function (req, res, next) {
  const posts = await Data.find();
  res.render("profile", { posts });
});

router.get("/createtask", function (req, res, next) {
  res.render("createtask", { title: "fiil your todo application" });
});

router.post("/createtask", async function (req, res, next) {
  try {
    const newdata = new Data(req.body);
    await newdata.save();
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
  }
});
router.get("/delete/:id", async function (req, res, next) {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.redirect("/profile");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
