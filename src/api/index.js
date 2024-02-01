const {
    getBestDoctor,
    getBestMedicine,
    postUser,
    getAllUser,
    getTheProductBasedOnId,
    getTheDoctorBasedOnId,
    getAllCompanyProduct,
    getCompanyDetails,
    AddProduct,
    GetBlogs,
    updateUser,
    UpdateProduct,
    deleteUser

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
    res.status(200).send({
        success: true,
        message: "User Data fetched successfully!",
        data: result
    });
}

const deleteOneUser = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deletedUser = await deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const updateOneUser = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const userInfo = req.body
        const result = await updateUser(id, userInfo)
        res.status(200).send({
            success: true,
            message: "User Data updated successfully!",
            data: result
        });
    } catch (error) {
        console.log("Something went wrong!", error)
    }
}

const MedicineProduct = async (req, res) => {
    const paramsValue = req.params
    const result = await getTheProductBasedOnId(paramsValue)
    res.send(result)
}



const SingleDoctor = async (req, res) => {
    const paramsValue = req.params
    const result = await getTheDoctorBasedOnId(paramsValue)
    res.send(result)
}

const CompanyProduct = async (req, res) => {
    const ParamsValue = req.params
    const result = await getAllCompanyProduct(ParamsValue)
    res.send(result)
}

const CompanyDetails = async (req, res) => {

    const ParamsValue = req.params
    const result = await getCompanyDetails(ParamsValue)
    res.send(result)
}

const MedicineProductAdd = async (req, res) => {
    const request = req.body
    const result = await AddProduct(request)
    res.send(result)
}


const MedicineUpdateProduct = async (req, res) => {
    const request = req.body
    const params = req.params.id
    const findTheData = await UpdateProduct(params, request)
    res.send(findTheData)
}

const BlogsData = async(req,res)=>{
   const query = req.query
   const findTheData = await GetBlogs(query)
   res.send(findTheData)
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
    updateOneUser,
    MedicineProductAdd,
    MedicineUpdateProduct,

    BlogsData,
    deleteOneUser

}