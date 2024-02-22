const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  BlogName: {
    type: String,
    required: true,
  },
  BlogWriting: {
    type: Array,
    required: true,
  },
  BlogPic: {
    type: String,
    required: true,
  },
  BlogTime: {
    type: String,
  },
  BlogWriterName: {
    type: String,
  },
  BlogWriterImage: {
    type: String,
  },
  email: {
    type: String,
  },
  like: {
    type: Number,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const BlogCollection = model("Blogs", BlogSchema);
module.exports = BlogCollection;
