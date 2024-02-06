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
  postCartMedicine,
  getAllCartMedicine,
  DeleteCartMedicineById,
  getTheMedicineById,
  AddProduct,
  GetBlogs,
  updateUser,
  UpdateProduct,
  deleteUser,
  getTheMedicineBasedonID,
  postBlog,
  UpdateLike,
  postDoctor,
  postPatient,
  deleteFromCart,
  UpdateQuantity,
  getAllCartPatients

} = require("../lib/users");
const { getDataformuser } = require("../lib");

const exampleDataApi = async (req, res) => {
  // you  can call the function form the lib for logic here
  console.log("reques accespt ", req.params.id);
  const result = await getDataformuser(req.params.id);
  res.send({
    message: "this server is running...",
    result,
  });
};

const BestDoctors = async (req, res) => {
  const queryValue = req.query;
  const result = await getBestDoctor(queryValue);
  console.log(result);
  res.send(result);
};

const BestMedicine = async (req, res) => {
  const queryValue = req.query;
  const result = await getBestMedicine(queryValue);
  res.send(result);
};

const CartMedicine = async (req, res) => {
  const queryValue = req.query;
  const result = await getAllCartMedicine(queryValue);
  res.send(result);
};

const DeleteCartItem = async (req, res) => {
  const params = req.params;
  const result = await deleteFromCart(params);
  res.send(result);
};
const InsertMedicine = async (req, res) => {
  try {
    const medicineData = req.body;
    const result = await postMedicine(medicineData);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const InsertCartMedicine = async (req, res) => {
  try {
    const medicineData = req.body;
    const result = await postCartMedicine(medicineData);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const DeleteCartMedicine = async (req, res) => {
  try {
    const paramsValue = req.params;
    const result = await DeleteCartMedicineById(paramsValue);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const InsertUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await postUser(userData);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const allUser = async (req, res) => {
  const queryValue = req.query;
  const result = await getAllUser(queryValue);
  res.status(200).send({
    success: true,
    message: "User Data fetched successfully!",
    data: result,
  });
};

const deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const result = await updateUser(id, userInfo);
    res.status(200).send({
      success: true,
      message: "User Data updated successfully!",
      data: result,
    });
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};

const MedicineProduct = async (req, res) => {
  const paramsValue = req.params;
  const result = await getTheProductBasedOnId(paramsValue);
  res.send(result);
};

const UpdateMedicineProduct = async (req, res) => {
  const paramsId = req.params;
  const paramsBody = req.body;
  const result = await getTheMedicineById(paramsId, paramsBody);
  res.send(result);
};

const singleMedicins = async (req, res) => {
  const paramsValue = req.params.id;

  const result = await getTheMedicineBasedonID(paramsValue);
  res.send(result);
};

const SingleDoctor = async (req, res) => {
  const paramsValue = req.params;
  const result = await getTheDoctorBasedOnId(paramsValue);
  res.send(result);
};

const CompanyProduct = async (req, res) => {
  const ParamsValue = req.params;
  const result = await getAllCompanyProduct(ParamsValue);
  res.send(result);
};

const CompanyDetails = async (req, res) => {
  const ParamsValue = req.params;
  const result = await getCompanyDetails(ParamsValue);
  res.send(result);
};

const MedicineProductAdd = async (req, res) => {
  const request = req.body;
  const result = await AddProduct(request);
  res.send(result);
};

const MedicineUpdateProduct = async (req, res) => {
  const request = req.body;
  const params = req.params.id;
  const findTheData = await UpdateProduct(params, request);
  res.send(findTheData);
};

const BlogsData = async (req, res) => {
  const query = req.query;
  const findTheData = await GetBlogs(query);
  res.send(findTheData);
};

const SingleBlog = async (req, res) => {
  const params = req.params;
  const result = await getSingleBlog(params);
  res.send(result);
};

const DoctorCategory = async (req, res) => {
  const result = await getDoctorCategory();
  res.send(result);
};

const InserBlog = async (req, res) => {
  try {
    const userData = req.body;
    const result = await postBlog(userData);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
const InsertDoctor = async (req, res) => {
  try {
    const doctorData = req.body;
    const result = await postDoctor(doctorData);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const Like = async (req, res) => {
  const id = req.params.id;
  const findTheData = await UpdateLike(id);
  res.send(findTheData);
};


const Quanity = async(req,res)=>{
    const id = req.params.id
    const quantity = req.body.quantity
    console.log(quantity)
    const UpdateTheData = await UpdateQuantity(id,quantity)
    res.send(UpdateTheData)
}

const InsertPatient = async (req, res) => {
    try {
        const patientData = req.body
        const result = await postPatient(patientData)
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

const AllPatients = async (req, res) => {
    const queryValue = req.query
    const result = await getAllCartPatients(queryValue)
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
  InsertCartMedicine,
  CartMedicine,
  DeleteCartMedicine,
  UpdateMedicineProduct,
  updateOneUser,
  MedicineProductAdd,
  MedicineUpdateProduct,
  BlogsData,
  deleteOneUser,
  singleMedicins,
  InserBlog,
  InsertDoctor,
  DoctorCategory,
  Like,
  DeleteCartItem,
  Quanity, 
  InsertPatient,
    AllPatients
};
