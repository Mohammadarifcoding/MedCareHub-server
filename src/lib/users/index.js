const BlogCollection = require("../../models/Blog");
const CompanyCollection = require("../../models/Company");
const DoctorsCollection = require("../../models/Doctor");
const MedicineCollection = require("../../models/Medicine");
const UserCollection = require("../../models/Users");
const CartMedicineCollection = require("../../models/CartMedicine");
const PatientsCollection = require("../../models/Patient");
const Reviewdatacollection = require("../../models/Review");
const { ObjectId } = require("mongodb");
const OrderCollection = require("../../models/Order");
const DoctorBookingCollection = require("../../models/DoctorBooking");

const getBestDoctor = async (queryData) => {
  let query = {};
  // console.log(queryData.category);

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
  // console.log(query);
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
  // console.log(query);
  const result = await MedicineCollection.find(query);
  return result;
};
const postUser = async (userData) => {
  // console.log(userData);
  const result = await UserCollection.create(userData);
  return result;
};

const getAllUser = async (queryData) => {
  let query = {};

  if (queryData.email) {
    email: queryData.email;
  }
  // console.log(queryData);
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
    // console.log(id, userInfo);
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
  // console.log(role);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      role: `${role}`,
    },
  };
  const result = await UserCollection.findOneAndUpdate(filter, updateDoc);
  return result;
};

const getUserRoleByEmail = async (req) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await UserCollection.findOne(query);
    let role = {};
    if (user) {
      switch (user.role) {
        case "admin":
          role = { admin: true };
          break;
        case "moderator":
          role = { moderator: true };
          break;
        default:
          role = { user: true };
      }
    }
    return role;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while getting the user role.");
  }
};

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
  // console.log(revid);
  const query = {
    ProductID: revid,
  };
  console.log(query)
  const result = await Reviewdatacollection.find(query);
  console.log(result)
  return result;
};

// const getTheDoctorBasedOnId = async (params) => {
//   const DocId = params.id;
//   const query = { ID: DocId };
//   const result = await DoctorsCollection.find(query);
//   return result[0];
// };
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

// const getAllCompanyProduct = async (params) => {
//   const name = params.name;
//   const query = { Company: name };
//   const result = await MedicineCollection.find(query);
//   return result;
// };

// const getCompanyDetails = async (params) => {
//   const name = params.name;
//   const query = { comname: name };
//   const result = await CompanyCollection.find(query);
//   return result;
// };

// const getTheProductBasedOnId = async (params) => {
//   const ProductId = params.id
//   const query = {
//     ID: ProductId
//   }
//   const result = await MedicineCollection.find(query)
//   return result[0]

// }

const getTheMedicineBasedonID = async (params) => {
  const MedId = params.ID;
  // console.log("id", MedId);
  const query = { _id: MedId };
  // console.log("query", query);
  const result = await MedicineCollection.find(query);
  return result[0];
};

const getTheDoctorBasedOnId = async (params) => {
  const DocId = params.id;
  const query = {
    _id: DocId,
  };
  const result = await DoctorsCollection.find(query);
  return result[0];
};

const getPatientBasedOnId = async (params) => {
  const DocId = params.id;
  const query = {
    _id: DocId,
  };
  const result = await DoctorBookingCollection.find(query);
  return result[0];

};

const getSinglePatientBasedOnId = async (params) => {
  const patientID = params.id;
  const query = {
    _id: patientID,
  };
  const result = await PatientsCollection.find(query);
  return result[0];
};

const deleteBookedPatient = async (id) => {
  try {
    const deletedOrder = await DoctorBookingCollection.findByIdAndDelete(id);
    return deletedOrder;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

// const getAllCompanyProduct = async (params) => {
//   const name = params.name
//   const query = {
//     Company: name
//   }
//   const result = await MedicineCollection.find(query)
//   return result
// }

// const AddProduct = async (body) => {
//   const result = await MedicineCollection.create(body);
//   return result;
// };

// const GetBlogs = async (queryData) => {
//   const result = await BlogCollection.find(queryData);
//   return result;
// };

// const UpdateProduct = async (medicineId, updatedData) => {
//   const updatedMedicine = await MedicineCollection.findOneAndUpdate(
//     {
//       _id: medicineId,
//     },
//     {
//       $set: updatedData,
//     },
//     {
//       new: true,
//     } // Returns the updated document
//   );
//   return updatedMedicine;
// };

const getSingleBlog = async (params) => {
  const query = { _id: params.id };
  const result = await BlogCollection.find(query);
  return result;
};
const postBlog = async (userBlog) => {
  // console.log(userBlog);
  const result = await BlogCollection.create(userBlog);
  return result;
};
const postDoctor = async (doctorData) => {
  // console.log(doctorData);
  const result = await DoctorsCollection.create(doctorData);
  return result;
};

const UpdateLike = async (data) => {
  try {
    const id = data?.params.id;
    const { value, user } = data?.body;
    const { name, email, react } = user;
    let { like, dislike } = value;
    const filter = { _id: new ObjectId(id) }
    const collection = await BlogCollection.findOne(filter);

    const hasReact = collection.reacts.some(
      (v) => v.email === email,
    );
    if (hasReact) {
      // Just return the message
      return { message: 'User has already react on the post' };
    }


    // Check if like, dislike, collection.like, and collection.dislike are NaN and set them to 0 if they are
    like = isNaN(like) ? 0 : like;
    dislike = isNaN(dislike) ? 0 : dislike;
    collection.like = isNaN(collection.like) ? 0 : collection.like;
    collection.dislike = isNaN(collection.dislike) ? 0 : collection.dislike;

    const totalLike = collection.like + like;
    const totalDislike = collection.dislike + dislike;

    const updateDoc = {
      $set: {
        like: totalLike,
        dislike: totalDislike
      },
      $push: {
        reacts: {
          user: name,
          email,
          react: react
        }
      }
    }

    const result = await BlogCollection.findOneAndUpdate(filter, updateDoc);
    return result
  } catch (error) {
    // console.error(error);
    return { message: 'An error occurred while updating the like/dislike count.' };
  }
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
  // console.log(patientData);
  const result = await PatientsCollection.create(patientData);
  return result;
};

const getAllCartPatients = async (queryData) => {
  const result = await PatientsCollection.find();
  return result;
};

const getAllBooking = async (queryData) => {
  const result = await DoctorBookingCollection.find();
  return result;
};

const DeleteFullCartMedicine = async (email) => {
  const result = await CartMedicineCollection.deleteMany({
    email,
  });
  return result;
};

// const updateBlog = async (id, blogInfo) => {
//   console.log(id);
//   try {
//     const user = await BlogCollection.findById(id);
//     if (!user) {
//       throw new Error("Blog not found");
//     }
//     console.log(id, blogInfo);
//     const updatedInfo = {
//       $set: {
//         BlogName: blogInfo.BlogName,
//         BlogWriting: blogInfo.BlogWriting,
//         BlogPic: blogInfo.BlogPic,
//         BlogWriterName: blogInfo.BlogWriterName,
//         BlogWriterImage: blogInfo.BlogWriterImage,
//       },
//     };

const updateBlog = async (paramsId, paramsBody) => {
  const blogId = paramsId.id;
  const query = { _id: blogId };
  const blogInfo = paramsBody;
  const blog = {
    $set: {
      BlogName: blogInfo.BlogName,
      BlogWriting: blogInfo.BlogWriting,
      BlogWriterName: blogInfo.BlogWriterName,
    },
  };

  const result = await BlogCollection.updateOne(query, blog);
  return result;
};

const getBlogDataId = async (blogID) => {
  try {
    const result = await BlogCollection.findById(blogID);
    return result;
  } catch (error) {
    console.error("Error fetching blog data by ID:", error);
    throw error; // You can handle this error in the controller
  }
};

const deleteBlog = async (id) => {
  try {
    const deletedUser = await BlogCollection.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

// const getTheProductBasedOnId = async (params) => {
//   const ProductId = params.id
//   const query = {
//     ID: ProductId
//   }
//   const result = await MedicineCollection.find(query)
//   return result[0]
// }

// const getTheMedicineBasedonID = async (params) => {
//   const query = {
//     ID: params
//   }
//   const result = await MedicineCollection.find(query);
//   return result[0];
// }

// const getTheDoctorBasedOnId = async (params) => {
//   const DocId = params.id
//   const query = {
//     ID: DocId
//   }
//   const result = await DoctorsCollection.find(query)
//   return result[0]
// }

const getAllCompanyProduct = async (params) => {
  const name = params.name;
  const query = {
    Company: name,
  };
  const result = await MedicineCollection.find(query);
  return result;
};

const getCompanyDetails = async (params) => {
  const name = params.name;
  const query = {
    comname: name,
  };
  const result = await CompanyCollection.find(query);
  return result;
};

const AddProduct = async (body) => {
  const result = await MedicineCollection.create(body);
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

// const GetBlogs = async (queryData) => {
//   const result = await BlogCollection.find()
//   return result

// }

const GetBlogs = async (queryData) => {
  const result = await BlogCollection.find(queryData);
  return result;
};

// const getSingleBlog = async (params) => {
//   const query = { _id: params.id }
//   const result = await BlogCollection.find(query)
//   return result
// }
// const postBlog = async (userBlog) => {
//   console.log(userBlog);
//   const result = await BlogCollection.create(userBlog)

//   return result

// }

// const postDoctor = async (doctorData) => {
//   console.log(doctorData);
//   const result = await DoctorsCollection.create(doctorData)
//   return result

// }
const postReview = async (reviewData) => {
  // console.log(reviewData);
  const result = await Reviewdatacollection.create(reviewData);
  return result;
};
const getAllCompany = async (queryData) => {
  const result = await CompanyCollection.find();
  return result;
};

const updateWishList = async (paramsId) => {
  const wishID = paramsId.id;
  const query = { _id: wishID };
  const wish = {
    $set: {
      wishList: true,
    },
  };

  const result = await MedicineCollection.updateOne(query, wish);
  return result;
};

const updateDoctorStatusId = async (req) => {
  const status = req.body.status;
  // console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateDocStatus = {
    $set: {
      status: status,
    },
  };
  const result = await DoctorsCollection.findOneAndUpdate(
    filter,
    updateDocStatus
  );
  return result;
};

const updatePatientStatusId = async (req) => {
  const status = req.body.status;
  // console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatePetientStatus = {
    $set: {
      status: status,
    },
  };
  const result = await PatientsCollection.findOneAndUpdate(
    filter,
    updatePetientStatus
  );
  return result;
};

const deletePatient = async (id) => {
  try {
    const deletedPatient = await PatientsCollection.findByIdAndDelete(id);
    return deletedPatient;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};
const deleteDoctor = async (id) => {
  try {
    const deletedDoctor = await DoctorsCollection.findByIdAndDelete(id);
    return deletedDoctor;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};
const deleteCompany = async (id) => {
  try {
    const deletedCompany = await CompanyCollection.findByIdAndDelete(id);
    return deletedCompany;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};
const deleteMedicine = async (id) => {
  try {
    const deletedMedicine = await MedicineCollection.findByIdAndDelete(id);
    return deletedMedicine;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

const updateCompanyStatusId = async (req) => {
  const status = req.body.status;
  // console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateCompanyStatus = {
    $set: {
      status: status,
    },
  };
  const result = await CompanyCollection.findOneAndUpdate(
    filter,
    updateCompanyStatus
  );
  return result;
};

const updateMedicineStatusId = async (req) => {
  const status = req.body.status;
  // console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateMedicineStatus = {
    $set: {
      status: status,
    },
  };
  const result = await MedicineCollection.findOneAndUpdate(
    filter,
    updateMedicineStatus
  );
  return result;
};
const updateBlogStatusId = async (req) => {
  const status = req.body.status;
  // console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateBlogStatus = {
    $set: {
      status: status,
    },
  };
  const result = await BlogCollection.findOneAndUpdate(
    filter,
    updateBlogStatus
  );
  return result;
};

const deleteBlogs = async (id) => {
  try {
    const deletedBlog = await BlogCollection.findByIdAndDelete(id);
    return deletedBlog;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};

const updateOrderStatusId = async (req) => {
  const status = req.body.status;
  console.log(status);
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updateOrderStatus = {
    $set: {
      status: status,
    },
  };
  const result = await OrderCollection.findOneAndUpdate(
    filter,
    updateOrderStatus
  );
  return result;
};

module.exports = {
  getUserRoleByEmail,
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

  getBlogDataId,
  deleteBlog,
  getAllCompany,
  updateWishList,
  updateDoctorStatusId,
  updatePatientStatusId,
  deletePatient,
  deleteDoctor,
  updateCompanyStatusId,
  deleteCompany,
  deleteMedicine,
  updateMedicineStatusId,
  updateBlogStatusId,
  deleteBlogs,

  getSinglePatientBasedOnId,
  deleteBookedPatient,
  getAllBooking,
  getPatientBasedOnId,
  updateOrderStatusId
};
