const DoctorsCollection = require("../../models/Doctor")
const MedicineCollection = require("../../models/Medicine")


const getBestDoctor = async(queryData)=>{
    let query = {}
     console.log(queryData.category)
     if(queryData.gender){
      queryData.gender == 'all' || (query.gender = queryData.gender)
     }
     if(queryData.age){
      queryData.age == 'all' || (query.age = { $lt : queryData.age})
     }
     if(queryData.category){
      queryData.category == 'all' || (query.DocType = queryData.category)
     }
     if(queryData.startAvail){
      queryData.startAvail == 'all' || (query.startAvail = { $lt : parseInt(queryData.startAvail) } )
     }
     if(queryData.endAvail){
      queryData.endAvail == 'all' || (query.endAvail = { $gte : parseInt(queryData.endAvail) } )
     }

     if(queryData.startfee){
      queryData.startfee == 'all' || (query.serviceFee = {...query.serviceFee,$gte : parseInt(queryData.startfee)})
     }
     if(queryData.endfee){
      queryData.endfee == 'all' || (query.serviceFee = {...query.serviceFee,$lte : parseInt(queryData.endfee)})
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


const getBestMedicine = async(queryData)=>{

  const result = await MedicineCollection.find()
   return result
}

module.exports = {getBestDoctor,getBestMedicine}