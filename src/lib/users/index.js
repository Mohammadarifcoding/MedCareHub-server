const BlogCollection = require("../../models/Blog");
const CompanyCollection = require("../../models/Company");
const DoctorsCollection = require("../../models/Doctor");
const MedicineCollection = require("../../models/Medicine");
const UserCollection = require("../../models/Users");
const CartMedicineCollection = require("../../models/CartMedicine");
const PatientsCollection = require("../../models/Patient");
const Reviewdatacollection = require("../../models/Review");
const { ObjectId } = require('mongodb');

const getBestDoctor = async (queryData) => {
  let query = {};
  console.log(queryData.category);

  if (queryData.gender) {
    queryData.gender == "all" || (query.gender = queryData.gender);
  }
  if (queryData.age) {
    queryData.age == "all" ||
      (query.age = {
        $lt: queryData.age,
      });
  }
  if (queryData.category) {
    queryData.category == "all" || (query.DocType = queryData.category);
  }
  if (queryData.startAvail) {
    queryData.startAvail == "all" ||
      (query.startAvail = {
        $lt: parseInt(queryData.startAvail),
      });
  }
  if (queryData.endAvail) {
    queryData.endAvail == "all" ||
      (query.endAvail = {
        $gte: parseInt(queryData.endAvail),
      });
  }

  if (queryData.startfee) {
    queryData.startfee == "all" ||
      (query.Price = {
        ...query.Price,
        $gte: parseInt(queryData.startfee),
      });
  }
  if (queryData.endfee) {
    queryData.endfee == "all" ||
      (query.Price = {
        ...query.Price,
        $lte: parseInt(queryData.endfee),
      });
  }
  console.log(query);
  const sort = {};
  sort.startAvail = 1;
  sort.endAvail = 1;
  sort.Price = -1;
  //    queryData.gender == 'all' || (query.gender = queryData.gender)
  //    queryData.zila == 'all' || (query.zila = queryData.zila)

  const getAllDoctors = await DoctorsCollection.find(query).sort(sort);
  return getAllDoctors;
};

const postMedicine = async (medicineData) => {
  // console.log(medicineData);
  const result = await MedicineCollection.create(medicineData);
  return result;
};

const postCartMedicine = async (medicineData) => {
  // console.log(medicineData);
  const result = await CartMedicineCollection.create(medicineData);
  return result;
};

const getBestMedicine = async (queryData) => {
  let query = {};

  if (queryData.Category) {
    queryData.Category == "all" || (query.Category = queryData.Category);
  }

  if (queryData.Company) {
    queryData.Company == "all" || (query.Company = queryData.Company);
  }
  if (queryData.startPrice) {
    queryData.startPrice == "all" ||
      (query.Price = {
        ...query.Price,
        $gte: parseInt(queryData.startPrice),
      });
  }
  if (queryData.endPrice) {
    queryData.endPrice == "all" ||
      (query.Price = {
        ...query.Price,
        $lte: parseInt(queryData.endPrice),
      });
  }
  console.log(query);
  const result = await MedicineCollection.find(query);
  return result;
};
const postUser = async (userData) => {
  console.log(userData);
  const result = await UserCollection.create(userData);
  return result;
};

const getAllUser = async (queryData) => {
  let query = {};

  if (queryData.email) {
    email: queryData.email;
  }
  console.log(queryData);
  const result = await UserCollection.find(queryData);
  return result;
};

const getAllCartMedicine = async (queryData) => {
  const email = queryData.email;
  const query = { email: email };

  try {
    const result = await CartMedicineCollection.find(query).exec();
    return result;
  } catch (error) {
    console.error("Error retrieving cart medicines:", error);
    const result = await UserCollection.find(queryData);
    return result;
  }
};

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
        gender: userInfo.gender,
      },
    };

    const result = await UserCollection.findByIdAndUpdate(id, updatedInfo, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log("Something went wrong!", error);
    throw error;
  }
};
const updateUserRoleById = async (req) => {
  const role = req.body.role;
  console.log(role);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      role: `${role}`
    }
  }
  const result = await UserCollection.findOneAndUpdate(filter, updateDoc);
  return result;
}

const getTheProductBasedOnId = async (params) => {
  const ProductId = params.id;
  const query = { _id: ProductId };
  const result = await MedicineCollection.find(query);
  return result[0];
};

const getTheMedicineById = async (paramsId, paramsBody) => {
  const ProductId = paramsId.id;
  const query = { _id: ProductId };
  const updatedMedicine = paramsBody;
  const medicine = {
    $set: {
      Medname: updatedMedicine.Medname,
      Image: updatedMedicine.Image,
      Company: updatedMedicine.Company,
      Price: updatedMedicine.Price,
      Category: updatedMedicine.Category,
      Description: updatedMedicine.Description,
    },
  };

  const result = await MedicineCollection.updateOne(query, medicine);
  return result;
};

const getTheReviewsBasedOnId = async (params) => {
  const revid = params.id;
  console.log(revid);
  const query = {
    ProductID: revid,
  };
  const result = await Reviewdatacollection.find(query);
  return result;
};

const getTheDoctorBasedOnId = async (params) => {
  const DocId = params.id;
  const query = { ID: DocId };
  const result = await DoctorsCollection.find(query);
  return result[0];
};
const deleteFromCart = async (params) => {
  const id = params.id;
  const query = {
    OrderId: id,
  };
  const result = await CartMedicineCollection.deleteOne(query);
  return result;
};
const DeleteCartMedicineById = async (params) => {
  const MedId = params.id;
  const query = { _id: MedId };
  const result = await MedicineCollection.deleteOne(query);
  return result;
};

const getAllCompanyProduct = async (params) => {
  const name = params.name;
  const query = { Company: name };
  const result = await MedicineCollection.find(query);
  return result;
};

const getCompanyDetails = async (params) => {
  const name = params.name;
  const query = { comname: name };
  const result = await CompanyCollection.find(query);
  return result;
};

// const getTheProductBasedOnId = async (params) => {
//   const ProductId = params.id
//   const query = {
//     ID: ProductId
//   }
//   const result = await MedicineCollection.find(query)
//   return result[0]

// }

const getTheMedicineBasedonID = async (params) => {
  const query = {
    ID: parseInt(params.ID),
  };
  const result = await MedicineCollection.find(query);
  ;
  return result[0];
};

// const getTheDoctorBasedOnId = async (params) => {
//   const DocId = params.id
//   const query = {
//     ID: DocId
//   }
//   const result = await DoctorsCollection.find(query)
//   return result[0]
// }

// const getAllCompanyProduct = async (params) => {
//   const name = params.name
//   const query = {
//     Company: name
//   }
//   const result = await MedicineCollection.find(query)
//   return result
// }

const AddProduct = async (body) => {
  const result = await MedicineCollection.create(body);
  return result;
};

const GetBlogs = async (queryData) => {
  const result = await BlogCollection.find(queryData);
  return result;
};

const UpdateProduct = async (medicineId, updatedData) => {
  const updatedMedicine = await MedicineCollection.findOneAndUpdate(
    {
      _id: medicineId,
    },
    {
      $set: updatedData,
    },
    {
      new: true,
    } // Returns the updated document
  );
  return updatedMedicine;
};

const getSingleBlog = async (params) => {
  const query = { _id: params.id };
  const result = await BlogCollection.find(query);
  return result;
};
const postBlog = async (userBlog) => {
  console.log(userBlog);
  const result = await BlogCollection.create(userBlog);
  return result;
};
const postDoctor = async (doctorData) => {
  console.log(doctorData);
  const result = await DoctorsCollection.create(doctorData);
  return result;
};

const UpdateLike = async (id) => {
  const updatedMedicine = await BlogCollection.findOneAndUpdate(
    { _id: id },
    { $inc: { like: 1 } },
    { new: true }
  );
  return updatedMedicine;
};

const UpdateQuantity = async (id, quantity) => {
  const Update = await CartMedicineCollection.findOneAndUpdate(
    {
      OrderId: id,
    },
    {
      $set: { quantity: parseInt(quantity) },
    },
    { new: true }
  );

  return Update;
};

const postPatient = async (patientData) => {
  console.log(patientData);
  const result = await PatientsCollection.create(patientData);
  return result;
};

const getAllCartPatients = async (queryData) => {
  const result = await PatientsCollection.find();
  return result;
};

const DeleteFullCartMedicine = async (email) => {
  const result = await CartMedicineCollection.deleteMany({
    email,
  });
  return result;
};

const updateBlog = async (id, blogInfo) => {
  console.log(id);
  try {
    const user = await BlogCollection.findById(id);
    if (!user) {
      throw new Error("Blog not found");
    }
    console.log(id, blogInfo);
    const updatedInfo = {
      $set: {
        BlogName: blogInfo.BlogName,
        BlogWriting: blogInfo.BlogWriting,
        BlogPic: blogInfo.BlogPic,
        BlogWriterName: blogInfo.BlogWriterName,
        BlogWriterImage: blogInfo.BlogWriterImage,
      },
    };

    const result = await BlogCollection.findByIdAndUpdate(id, updatedInfo, {
      new: true,
    });
    return result;
  } catch (error) {
    console.log("Something went wrong!", error);
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

// const GetBlogs = async (queryData) => {
//   const result = await BlogCollection.find()
//   return result

// }

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
  updateUserRoleById,
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
  UpdateProduct,
  GetBlogs,
  updateUser,
  deleteUser,
  deleteFromCart,
  getSingleBlog,
  // getDoctorCategory,
  getTheMedicineBasedonID,
  postBlog,
  postDoctor,
  postReview,
  getTheReviewsBasedOnId,
  postPatient,
  getAllCartPatients,
  UpdateLike,
  UpdateQuantity,
  DeleteFullCartMedicine,
  updateBlog,
};
