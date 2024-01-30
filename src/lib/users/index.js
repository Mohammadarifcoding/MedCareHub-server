const DoctorsCollection = require("../../models/Doctor")
const MedicineCollection = require("../../models/Medicine")
const UserCollection = require("../../models/Users")


const getBestDoctor = async (queryData) => {
  let query = {}
  console.log(queryData.category)
  if (queryData.gender) {
    queryData.gender == 'all' || (query.gender = queryData.gender)
  }
  if (queryData.age) {
    queryData.age == 'all' || (query.age = {
      $lt: queryData.age
    })
  }
  if (queryData.category) {
    queryData.category == 'all' || (query.DocType = queryData.category)
  }
  if (queryData.startAvail) {
    queryData.startAvail == 'all' || (query.startAvail = {
      $lt: parseInt(queryData.startAvail)
    })
  }
  if (queryData.endAvail) {
    queryData.endAvail == 'all' || (query.endAvail = {
      $gte: parseInt(queryData.endAvail)
    })
  }

  if (queryData.startfee) {
    queryData.startfee == 'all' || (query.serviceFee = {
      ...query.serviceFee,
      $gte: parseInt(queryData.startfee)
    })
  }
  if (queryData.endfee) {
    queryData.endfee == 'all' || (query.serviceFee = {
      ...query.serviceFee,
      $lte: parseInt(queryData.endfee)
    })
  }
  console.log(query)
  const sort = {}
  sort.startAvail = 1
  sort.endAvail = 1
  sort.serviceFee = -1
  //    queryData.gender == 'all' || (query.gender = queryData.gender)
  //    queryData.zila == 'all' || (query.zila = queryData.zila)



  const getAllDoctors = await DoctorsCollection.find(query).sort(sort)
  return getAllDoctors
}


const getBestMedicine = async (queryData) => {

  const result = await MedicineCollection.find()
  return result
}
const postUser = async (userData) => {
  console.log(userData);
  const result = await UserCollection.create(userData)
  return result

}

const getAllUser = async (queryData) => {

  const result = await UserCollection.find()
  return result
}

const getTheProductBasedOnId = async(params)=>{
  const ProductId = params.id
  const query = {ID : ProductId}
  const result = await MedicineCollection.find(query)
  return result[0]

}

const getTheDoctorBasedOnId = async(params)=> {
  const DocId = params.id
  const query = {ID : DocId}
  const result = await DoctorsCollection.find(query)
  return result[0]
}

module.exports = {
  getBestDoctor,
  getBestMedicine,
  postUser,
  getAllUser,
  getTheProductBasedOnId,
  getTheDoctorBasedOnId
}