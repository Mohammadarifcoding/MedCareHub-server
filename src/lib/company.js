const CompanyCollection = require("../models/Company");

const InsertCompany = async (req, res) => {
    const newCompany = req.body;
    // console.log(newCompany);
    const data = new CompanyCollection(newCompany);
    const result = await data.save();
    res.send(result);
}

module.exports = { InsertCompany }