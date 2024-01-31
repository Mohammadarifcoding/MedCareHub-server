const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    "name": {
        type: String,
        default: 'yes'
    },
    "date": {
        type: String,
        required: true
    },
    "tag": {
        type: String,
        required: true
    },
    "heading": {
        type: String,
        required: true
    },
    "post-body": {
        type: String,
        required: true
    },
    "userImg": {
        type: String,
        required: true
    },
    "comment": {
        type: String,
        required: true
    },

})
const ForumPostCollection = model('post', PostSchema);
module.exports = ForumPostCollection;