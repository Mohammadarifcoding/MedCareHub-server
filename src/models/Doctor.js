const { Schema, model } = require("mongoose");

const DoctorsSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  DocName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  DocType: {
    type: String,
    required: true,
  },
  service: {
    type: Array,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  startAvail: {
    type: Number,
    required: true,
  },
  endAvail: {
    type: Number,
    required: true,
  },
  degree: {
    type: Array,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
  serviceFee: {
    type: Number,
    required: true,
  },
  specialties: {
    type: Array,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    default: "pending",
  },
});

const DoctorsCollection = model("Doctors", DoctorsSchema);
module.exports = DoctorsCollection;
