const { Schema, model } = require("mongoose");

const DoctorsSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true
  },
  DocName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  DocType: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  startAvail: {
    type: Number,
    required: true
  },
  endAvail: {
    type: Number,
    required: true
  },
  degree: {
    type: Array,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  serviceFee :{
    type: Number,
    required:true
  }
});

const DoctorsCollection = model("Doctors", DoctorsSchema);
module.exports = DoctorsCollection;


