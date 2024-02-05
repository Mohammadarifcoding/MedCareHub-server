const BlogCollection = require("../../models/Blog")
const CompanyCollection = require("../../models/Company")
const DoctorsCollection = require("../../models/Doctor")
const MedicineCollection = require("../../models/Medicine")
const UserCollection = require("../../models/Users")


const getBestDoctor = async (queryData) => {
  let query = {}
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
    queryData.startfee == 'all' || (query.Price = {
      ...query.Price,
      $gte: parseInt(queryData.startfee)
    })
  }
  if (queryData.endfee) {
    queryData.endfee == 'all' || (query.Price = {
      ...query.Price,
      $lte: parseInt(queryData.endfee)
    })
  }
  console.log(query)
  const sort = {}
  sort.startAvail = 1
  sort.endAvail = 1
  sort.Price = -1
  //    queryData.gender == 'all' || (query.gender = queryData.gender)
  //    queryData.zila == 'all' || (query.zila = queryData.zila)



  const getAllDoctors = await DoctorsCollection.find(query).sort(sort)
  return getAllDoctors
}


const getBestMedicine = async (queryData) => {
  let query = {}

  if (queryData.Category) {
    queryData.Category == 'all' || (query.Category = queryData.Category)
  }

  if (queryData.Company) {
    queryData.Company == 'all' || (query.Company = queryData.Company)
  }
  if (queryData.startPrice) {
    queryData.startPrice == 'all' || (query.Price = {
      ...query.Price,
      $gte: parseInt(queryData.startPrice)
    })
  }
  if (queryData.endPrice) {
    queryData.endPrice == 'all' || (query.Price = {
      ...query.Price,
      $lte: parseInt(queryData.endPrice)
    })
  }
  console.log(query)
  const result = await MedicineCollection.find(query)
  return result
}
const postUser = async (userData) => {
  console.log(userData);
  const result = await UserCollection.create(userData)
  return result

}

const getAllUser = async (queryData) => {
  const result = await UserCollection.find(queryData)
  return result
}

const deleteUser = async (id) => {
  try {
    const deletedUser = await UserCollection.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

const updateUser = async (id, userInfo) => {
  try {
    const user = await UserCollection.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    console.log(id, userInfo);
    const updatedInfo = {
      $set: {
        name: userInfo.name,
        email: userInfo.email,
        imageURL: userInfo.imageURL,
        age: userInfo.age,
        address: userInfo.address,
        phoneNumber: userInfo.phoneNumber,
        gender: userInfo.gender
      },
    };

    const result = await UserCollection.findByIdAndUpdate(id, updatedInfo, {
      new: true
    });
    return result;
  } catch (error) {
    console.log("Something went wrong!", error)
    throw error;
  }
};


const getTheProductBasedOnId = async (params) => {
  const ProductId = params.id
  const query = {
    ID: ProductId
  }
  const result = await MedicineCollection.find(query)
  return result[0]

}

const getTheMedicineBasedonID = async (params) => {
  const query = {
    ID: params
  }
  const result = await MedicineCollection.find(query);
  return result[0];
}

const getTheDoctorBasedOnId = async (params) => {
  const DocId = params.id
  const query = {
    ID: DocId
  }
  const result = await DoctorsCollection.find(query)
  return result[0]
}

const getAllCompanyProduct = async (params) => {
  const name = params.name
  const query = {
    Company: name
  }
  const result = await MedicineCollection.find(query)
  return result
}

const getCompanyDetails = async (params) => {
  const name = params.name
  const query = {
    comname: name
  }
  const result = await CompanyCollection.find(query)
  return result
}

const AddProduct = async (body) => {
  const result = await MedicineCollection.create(body)
  return result
}

const UpdateProduct = async (medicineId, updatedData) => {
  const updatedMedicine = await MedicineCollection.findOneAndUpdate({
    _id: medicineId
  }, {
    $set: updatedData
  }, {
    new: true
  } // Returns the updated document
  );
  return updatedMedicine
}




const GetBlogs = async (queryData) => {
  const result = await BlogCollection.find()
  return result

}


const GetBlogs = async (queryData) => {
  const result = await BlogCollection.find(queryData)
  return result
}



const getSingleBlog = async (params) => {
  const query = { _id: params.id }
  const result = await BlogCollection.find(query)
  return result
}
const postBlog = async (userBlog) => {
  console.log(userBlog);
  const result = await BlogCollection.create(userBlog)

  return result

}

const postDoctor = async (doctorData) => {
  console.log(doctorData);
  const result = await DoctorsCollection.create(doctorData)
  return result

}


module.exports = {
  getBestDoctor,
  getBestMedicine,
  postUser,
  getAllUser,
  getTheProductBasedOnId,
  getTheDoctorBasedOnId,
  getAllCompanyProduct,
  getCompanyDetails,
  AddProduct,
  UpdateProduct,
  GetBlogs,
  updateUser,
  deleteUser,
  getSingleBlog,
  getDoctorCategory,
  getTheMedicineBasedonID,
  postBlog,
  postDoctor


}