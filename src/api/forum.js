const { insertForumData, getForumDataFromCollection } = require("../lib/forum");


const savedFrormPost = async (req, res) => {
    const postData = req.body;
    const result = await insertForumData(postData);
    res.send(result);

}
const getForumPost = async (req, res) => {
    const result = await getForumDataFromCollection();
    res.send(result)
}

module.exports = { savedFrormPost, getForumPost }