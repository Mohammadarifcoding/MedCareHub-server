const { query } = require("express");
const ForumPostCollection = require("../models/forum");
const { ObjectId } = require('mongodb');
const uuid = require('uuid');

const insertForumData = async (postData) => {
    try {
        const post = new ForumPostCollection(postData);
        const result = await post.save();
        console.log('post data save succesfully', result);
        return result;
    }
    catch (error) {
        console.error('error saving forum post data')
        throw error;
    }
}

const getForumDataFromCollection = async (category) => {
    try {
        let query = {};

        if (category && category.category) {
            query.category = category.category;
        }

        const forumPost = await ForumPostCollection.find(query);
        return forumPost;
    } catch (error) {
        console.log('Forum data not found', error);
        throw error;
    }
};
const getForumDatabymail = async (userMail) => {
    try {
        let query = {};

        if (userMail && userMail.mail) {
            query.userMail = userMail.mail;
        }

        const forumPost = await ForumPostCollection.find(query);
        return forumPost;
    } catch (error) {
        console.log('Forum data not found', error);
        throw error;
    }
};
const addedCommnetById = async (data) => {
    try {
        const id = data?.params?.id;
        console.log(id);
        const comment = data?.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
            $push: {
                comments: {
                    id: uuid.v4(),
                    user: comment.user,
                    email: comment.email,
                    comment: comment.comment
                }
            }
        }

        const forumComment = await ForumPostCollection.findOneAndUpdate(filter, updateDoc, { new: true });
        return forumComment;
    } catch (error) {
        console.log('Forum data not found', error);
        throw error;
    }
};






module.exports = { insertForumData, getForumDataFromCollection, getForumDatabymail, addedCommnetById }