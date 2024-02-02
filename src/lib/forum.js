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
const getForumDataFromCollection = async () => {

    try {
        const forumPost = await ForumPostCollection.find();
        return forumPost;
    } catch (error) {
        console.log('Forum data not found', error);
        throw error;
    }
};

module.exports = { insertForumData, getForumDataFromCollection }