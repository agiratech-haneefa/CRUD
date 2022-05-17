const express = require("express");
const router = express.Router();
const studentService = require("../services/student");

router.post("/create", async (req, res) => {

  await studentService
    .createStudent(req, res)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

router.get("/get/:id", async (req, res) => {
  console.log("getStudent route");
  await studentService
    .getStudent(req)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.put("/update", async (req, res) => {
  console.log("updateStudent route");
  await studentService
    .updateStudent(req)
    .then((data) => {
      res.send("Data updated");
    })
    .catch((error) => {
      console.error(error);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await studentService
    .deleteStudent(req, res)
    .then((data) => {
      res.send("Data Deleted!");
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

module.exports = router;
