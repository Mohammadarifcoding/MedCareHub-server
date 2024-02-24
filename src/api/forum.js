const {
  insertForumData,
  getForumDataFromCollection,
  getForumDatabymail,
  addedCommnetById,
  updateLikeDislikeById,
  getLikeDislikeDataByPostId,
  deletePostById,
  updatePostById,
  getAllForumData,
} = require("../lib/forum");

const savedFrormPost = async (req, res) => {
  const postData = req.body;
  const result = await insertForumData(postData);
  res.send(result);
};

const getForumData = async (req, res) => {
  const result = await getAllForumData();
  res.send(result)
}
const getForumPost = async (req, res) => {
  const result = await getForumDataFromCollection(req.params);
  res.send(result);
};
const getForumPostbymail = async (req, res) => {
  const result = await getForumDatabymail(req.params);
  res.send(result);
};
const postComment = async (req, res) => {
  const result = await addedCommnetById(req);
  res.send(result);
};

const updateLikeDislike = async (req, res) => {
  const result = await updateLikeDislikeById(req)
  res.send(result)
}
const getLikeDislikeData = async (req, res) => {
  const result = await getLikeDislikeDataByPostId(req)
  res.send(result)
}

const deletePost = async (req, res) => {
  const result = await deletePostById(req)
  res.send(result)
}
const updatePost = async (req, res) => {
  const result = await updatePostById(req)
  res.send(result)
}

module.exports = {
  getForumData,
  updatePost,
  deletePost,
  getLikeDislikeData,
  updateLikeDislike,
  savedFrormPost,
  getForumPost,
  getForumPostbymail,
  postComment,
};
