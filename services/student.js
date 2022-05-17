const studentModel = require("../models/student");

console.log("Entered stuent Service -- /service/student.js");

const createStudent = async (req) => {
  return studentModel.createStudent(req).catch((error) => {
    console.error(error);
  });
};

const getStudent = async (req) => {
  return studentModel.getStudent(req).catch((error) => {
    console.error(error);
  });
};

const updateStudent = async (req) => {
  return studentModel.updateStudent(req).catch((error) => {
    console.error(error);
  });
};

const deleteStudent = async (req) => {
  return studentModel.deleteStudent(req).catch((error) => {
    console.error(error);
  });
};

module.exports = { createStudent, getStudent, updateStudent, deleteStudent };
