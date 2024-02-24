const { query } = require("express");
const ForumPostCollection = require("../models/forum");
const { ObjectId } = require('mongodb');
const uuid = require('uuid');

const insertForumData = async (postData) => {
    try {
        const post = new ForumPostCollection(postData);
        const result = await post.save();
        // console.log('post data save succesfully', result);
        return result;
    }
    catch (error) {
        console.error('error saving forum post data')
        throw error;
    }
}
const getAllForumData = async () => {
    const result = await ForumPostCollection.find();
    return result;
}

const getForumDataFromCollection = async (category) => {
    try {
        let query = {};

        if (category && category.category) {
            query.category = category.category;
        }

        // Add the status condition to the query
        query.status = "Approved";

        const forumPost = await ForumPostCollection.find(query);
        return forumPost;
    } catch (error) {
        // console.log('Forum data not found', error);
        throw error;
    }
};

const getForumDatabymail = async (userMail) => {
    try {
        let query = {};

        if (userMail && userMail.mail) {
            query.userMail = userMail.mail;
        }

        // Add the status condition to the query
        query.status = "Approved";

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
        // console.log(id);
        const comment = data?.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
            $push: {
                comments: {
                    id: uuid.v4(),
                    user: comment.user,
                    email: comment.email,
                    comment: comment.comment,
                    userImg: comment.userImg
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

const updateLikeDislikeById = async (data) => {
    try {
        const id = data?.params.id;
        const { value, user } = data?.body;
        const { name, email, react } = user;
        let { like, dislike } = value;
        const filter = { _id: new ObjectId(id) }
        const collection = await ForumPostCollection.findOne(filter);

        const hasReact = collection.reacts.some(
            (v) => v.email === email,
        );
        if (hasReact) {
            // Just return the message
            return { message: 'User has already react on the post' };
        }


        // Check if like, dislike, collection.like, and collection.dislike are NaN and set them to 0 if they are
        like = isNaN(like) ? 0 : like;
        dislike = isNaN(dislike) ? 0 : dislike;
        collection.like = isNaN(collection.like) ? 0 : collection.like;
        collection.dislike = isNaN(collection.dislike) ? 0 : collection.dislike;

        const totalLike = collection.like + like;
        const totalDislike = collection.dislike + dislike;

        const updateDoc = {
            $set: {
                like: totalLike,
                dislike: totalDislike
            },
            $push: {
                reacts: {
                    user: name,
                    email,
                    react: react
                }
            }
        }

        const result = await ForumPostCollection.findOneAndUpdate(filter, updateDoc);
        return result
    } catch (error) {
        // console.error(error);
        return { message: 'An error occurred while updating the like/dislike count.' };
    }
}




const getLikeDislikeDataByPostId = async (req) => {
    const postId = req.params.id;
    const userEmail = req.query.email;

    // console.log(postId, userEmail);
    try {
        const id = { _id: new ObjectId(postId) };
        const post = await ForumPostCollection.findOne(id);
        if (!post) {
            return { message: 'Post not found' }
        }

        const userReaction = post.reacts.find(react => react.email === userEmail);
        if (userReaction) {
            return userReaction;
        } else {
            return { message: 'No reaction from this user' };
        }
    } catch (err) {
        // console.error(err)
        return { err };
    }
}

const deletePostById = async (req) => {
    const id = req.params.id;
    const qurey = { _id: new ObjectId(id) }
    const result = await ForumPostCollection.deleteOne(qurey);

    return result;
}

const updatePostById = async (req) => {
    const id = req.params.id;
    const { title, discription, category, postTag } = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            title,
            discription,
            category,
            postTag
        }
    }
    const result = await userCollection.updateOne(filter, updateDoc);
    return result;
}
const updatePostStatusById = async (req) => {
    const status = req.body.status;
    // console.log(role);
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            status: `${status}`,
        },
    };
    const result = await ForumPostCollection.findOneAndUpdate(filter, updateDoc);
    return result;
};






module.exports = { updatePostStatusById, getAllForumData, updatePostById, deletePostById, getLikeDislikeDataByPostId, updateLikeDislikeById, insertForumData, getForumDataFromCollection, getForumDatabymail, addedCommnetById }