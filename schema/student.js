const mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
  Name: String,
  Mobile: Number,
  DOB: Date,
  Email: String,
  Address: String,
});

module.exports = mongoose.model("student", StudentSchema, "Students");
