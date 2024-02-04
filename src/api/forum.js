const { insertForumData, getForumDataFromCollection } = require("../lib/forum");


const savedFrormPost = async (req, res) => {
    const postData = req.body;
    const result = await insertForumData(postData);
    res.send(result);

}
// const getForumPost = async (req, res) => {
//     let query = {};
//     console.log(query)
//     if (req.params.category) {
//         query = req.params.category;
//     }
//     const result = await getForumDataFromCollection(query);
//     res.send(result)
// }
const getForumPost = async (req, res) => {
    try {
        // let query = {};
        // if (req.params.category) {
        //     query.category = req.params.category;
        // }
        // console.log(query)
        const result = await getForumDataFromCollection(req.params);
        res.send(result);
    } catch (error) {
        console.error('Error fetching forum data:', error);
        res.status(500).send('Internal server error');
    }
};

module.exports = { savedFrormPost, getForumPost }