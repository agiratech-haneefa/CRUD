const express = require("express");
const app = express();
const nodemailer = require("nodemailer");


const sendEMail = async (req) => {
  const sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: req.body.email,
      pass: req.body.password,
    },
  });

  const composeMail = {
    from: "mdhaneefa.it@gmail.com",
    to: "mohamed.haneefa@agiratech.com, haneefamd.it@gmail.com",
    subject: "Send mail using nodejs",
    // text: "Hellow Mohamed Haneefa, This message is from send mailer",
    html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };

  sender.sendMail(composeMail, (err) => {
    if (err) console.log(err);
    else console.log("Mail sent successfully");
  });
};

module.exports = { sendEMail };
