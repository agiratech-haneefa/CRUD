const express = require("express");
const router = express.Router();
const studentRoute = require("./student");
const mailerRoute = require("./mailer");
const fileUploadRoute = require("./filUpload");

router.use("/student", studentRoute);
router.use("/mail", mailerRoute);
router.use("/fileUpload", fileUploadRoute);

module.exports = router;
