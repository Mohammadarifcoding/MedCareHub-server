const { insertForumData, getForumDataFromCollection, getForumDatabymail } = require("../lib/forum");


const savedFrormPost = async (req, res) => {
    const postData = req.body;
    const result = await insertForumData(postData);
    res.send(result);

}
const getForumPost = async (req, res) => {
    const result = await getForumDataFromCollection(req.params);
    res.send(result)
}
const getForumPostbymail = async (req, res) => {
    console.log(req.params)
    const result = await getForumDatabymail(req.params);
    res.send(result)
}

module.exports = { savedFrormPost, getForumPost, getForumPostbymail }