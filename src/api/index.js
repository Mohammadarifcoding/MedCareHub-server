const {
    getBestDoctor,
    getBestMedicine,
    postUser,
    getAllUser,
    getTheProductBasedOnId,
    getTheDoctorBasedOnId,
    getAllCompanyProduct,
    getCompanyDetails,
    postMedicine,
    getTheProductBasedOnEmail
} = require("../lib/users");
const {
    getDataformuser
} = require("../lib");


const exampleDataApi = async (req, res) => {
    // you  can call the function form the lib for logic here
    console.log('reques accespt ', req.params.id);
    const result = await getDataformuser(req.params.id)
    res.send({
        message: 'this server is running...',
        result
    })
}

const BestDoctors = async (req, res) => {
    const queryValue = req.query
    const result = await getBestDoctor(queryValue)
    console.log(result)
    res.send(result)

}

const BestMedicine = async (req, res) => {
    const queryValue = req.query
    const result = await getBestMedicine(queryValue)
    res.send(result)
}

const InsertMedicine = async (req, res) => {
    try {
        const medicineData = req.body
        const result = await postMedicine(medicineData)
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

const InsertUser = async (req, res) => {
    try {
        const userData = req.body
        const result = await postUser(userData)
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

const allUser = async (req, res) => {
    const queryValue = req.query
    const result = await getAllUser(queryValue)
    res.send(result)
}

const MedicineProduct = async(req,res)=>{
    const paramsValue = req.params
    const result = await getTheProductBasedOnId(paramsValue)
    res.send(result)
}



const SingleDoctor = async(req,res)=>{
    const paramsValue = req.params
    const result = await getTheDoctorBasedOnId(paramsValue)
    res.send(result)
}

const CompanyProduct = async(req,res)=>{
    const ParamsValue = req.params
    const result = await getAllCompanyProduct(ParamsValue)
    res.send(result)
}

const CompanyDetails = async(req,res)=>{
    
    const ParamsValue = req.params
    const result = await getCompanyDetails(ParamsValue)
    res.send(result)
}


module.exports = {
    exampleDataApi,
    BestDoctors,
    BestMedicine,
    InsertUser,
    allUser,
    MedicineProduct,
    SingleDoctor,
    CompanyProduct,
    CompanyDetails,
    InsertMedicine,

    
}