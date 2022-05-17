const express = require("express");
const router = express.Router();
const mailerService = require("../services/mailer");

router.post("/send", async (req, res) => {
  await mailerService
    .sendEMail(req, res)
    .then((data) => {
      res.send("Mail sent successfully");
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

module.exports = router;
