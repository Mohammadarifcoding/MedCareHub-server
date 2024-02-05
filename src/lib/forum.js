const { query } = require("express");
const ForumPostCollection = require("../models/forum")

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






module.exports = { insertForumData, getForumDataFromCollection }