const express = require("express");
const router = express.Router();
const { upload } = require("../services/fileUpload");

router.get("/login", isLogin, (req, res) => {
  console.log("After middleware");
  console.log("Welcome User");
});



function isLogin(req, res, next) {
  console.log("In middleware");
  if (req.query.isLogin === "true") {
    console.log("Login user");
    next();
  } else {
    res.send("Access denied");
  }
}

router.post("/single", upload.single("SingleFile"), (req, res) => {
  console.log(req.file);
  res.send("Single file Uploaded");
});

router.post("/multi", upload.array("MultiFiles", 3), (req, res) => {
  console.log(req.files);
  res.send("Mulit files uploaded");
});

module.exports = router;
