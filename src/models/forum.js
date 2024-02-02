const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "date": {
        type: Object,
        required: true
    },
    "tag": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "discription": {
        type: String,
        required: true
    },
    "userImg": {
        type: String,
        required: true
    },
    "comment": {
        type: Array,
        required: false
    },

})
const ForumPostCollection = model('post', PostSchema);
module.exports = ForumPostCollection;