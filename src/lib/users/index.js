const DoctorsCollection = require("../../models/Doctor")


const getBestDoctor = async(queryData)=>{
    const getAllDoctors = await DoctorsCollection.find()
    return getAllDoctors
}

module.exports = {getBestDoctor}