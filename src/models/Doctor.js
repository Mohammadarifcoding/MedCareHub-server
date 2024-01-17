const { Schema, model } = require("mongoose");

const DoctorsSchema = new Schema({
  doctor_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  Degrees: {
    type: Array,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fee: {
    type: Object,
    required: true,
  },
});

const DoctorsCollection = model("Doctors", DoctorsSchema);
module.exports = DoctorsCollection;


