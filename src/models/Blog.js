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
    required: true,
  },
  BlogWriterName: {
    type: String,
    required: true,
  },
  BlogWriterImage: {
    type: String,
    required: true,
  }
});

const BlogCollection = model("Blogs", BlogSchema);
module.exports = BlogCollection;
