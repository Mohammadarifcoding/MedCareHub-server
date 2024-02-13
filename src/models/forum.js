const { Schema, model } = require("mongoose");
const CommentSchema = new Schema({
    "id": {
        type: String,
        required: true
    },
    "user": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "comment": {
        type: String,
        required: true
    },
    "userImg": {
        type: String,
        required: true
    }
});
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
    "comments": {
        type: [CommentSchema],
        required: false
    },
    "userMail": {
        type: String,
        required: true
    },
    "react": {
        type: [lideDislike],
        required: true
    },
    "like": {
        type: Number,
        required: true
    },
    "dislike": {
        type: Number,
        required: true
    },

})

const ForumPostCollection = model('post', PostSchema);
module.exports = ForumPostCollection;