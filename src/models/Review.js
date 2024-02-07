
const { Schema, model } = require("mongoose");

const ReviewsSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  revdata:{
    type:Object,
    required:false
  }
});


const Reviewdatacollection=model("reviews",ReviewsSchema);
module.exports = Reviewdatacollection;
