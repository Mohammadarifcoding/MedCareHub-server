const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "date": {
        type: String,
        required: true
    },
    "postTag": {
        type: String,
        required: true
    },
    "category": {
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
    "userMail": {
        type: String,
        required: true
    }
})

const ForumPostCollection = model('post', PostSchema);
module.exports = ForumPostCollection;