const { insertForumData } = require("../lib/forum");


const savedFrormPost = async (req, res) => {
    const postData = req.body;
    const result = await insertForumData(postData);
    console.log('no no no')
    res.send(result);

}

module.exports = { savedFrormPost }