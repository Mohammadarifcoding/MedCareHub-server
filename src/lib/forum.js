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
        let query = {}; // Initialize an empty query object

        if (category && category.category) {
            // If category is provided and not empty, add it to the query
            query.category = category.category;
        }

        const forumPost = await ForumPostCollection.find(query).exec();
        return forumPost;
    } catch (error) {
        console.log('Forum data not found', error);
        throw error;
    }
};



module.exports = { insertForumData, getForumDataFromCollection }