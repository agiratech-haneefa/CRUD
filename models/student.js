console.log("Entered stuent model -- /models/student.js");
const StudentSchema = require("../schema/student");

const createStudent = async (req) => {
  // let query = ;

  const obj = {
    Name: req.body.name,
    Mobile: req.body.mobile,
    DOB: req.body.dob,
    Email: req.body.email,
    Address: req.body.address,
  };

  return new StudentSchema(obj).save().catch((err) => {
    console.log(err);
  });
};

const getStudent = async (req) => {
  return StudentSchema.find({ _id: req.params.id }).catch((err) => {
    console.log(err);
  });
};

const updateStudent = async (req) => {

  const obj = {
    Name: req.body.name,
    Mobile: req.body.mobile,
    DOB: req.body.dob,
    Email: req.body.email,
    Address: req.body.address,
  };

  return StudentSchema.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: obj }
  ).catch((err) => {
    console.log(err);
  });
};

const deleteStudent = async (req) => {
  return StudentSchema.findByIdAndDelete({ _id: req.params.id }).catch((err) => {
    console.log(err);
  });
};

module.exports = { createStudent, getStudent, updateStudent, deleteStudent };
