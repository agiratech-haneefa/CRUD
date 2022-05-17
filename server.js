const express = require("express");
const app = express();
const port = 7000;
const Routers = require("./routes");
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();

app.use("/api", Routers);

//Db connection
const query = process.env.URI;

mongoose.connect(
  query,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log("Error!" + error);
    } else console.log("database connected");
  }
);

app.listen(port, (err) => {
  if (!err) console.log(`server started port on:${port}`);
  else console.log("server starting error", err);
});
