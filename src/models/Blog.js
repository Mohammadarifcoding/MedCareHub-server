const { Schema, model } = require("mongoose");
const lideDislike = new Schema({
  "user": {
    type: String,
    required: true
  },
  "email": {
    type: String,
    required: true
  },
  "react": {
    type: String,
    required: true
  }
});
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
    type: String

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
  "reacts": {
    type: [lideDislike],
    required: true
  },
  "like": {
    type: Number,
    required: false
  },
  "dislike": {
    type: Number,
    required: false
  },
  status: {
    type: String,
    default: "Pending"
  }
});

const BlogCollection = model("Blogs", BlogSchema);
module.exports = BlogCollection;
