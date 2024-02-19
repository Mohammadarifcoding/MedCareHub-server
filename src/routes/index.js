// const { savedFrormPost } = require('../api/forum')
const {
    exampleDataApi,
    BestDoctors,
    BestMedicine,
    InsertUser,
    allUser,
    MedicineProductAdd,
    MedicineProduct,
    CompanyProduct,
    SingleDoctor,
    CompanyDetails,
    MedicineUpdateProduct,
    InsertMedicine,
    InsertCartMedicine,
    CartMedicine,
    DeleteCartMedicine,
    BlogsData,
    updateOneUser,
    deleteOneUser,
    singleMedicins,
    InserBlog,
    InsertDoctor,
    Like,
    DeleteCartItem,
    Quanity,
    DeleteCart,
    EditOneBlog,
    SingleBlogdata,
    deleteOneBlog,
    SingleBlog,
    Insertreview,
    InsertPatient,
    AllPatients,
    updateUserRole,
    AllCompany,
    WishList,
    GetReviewData,
    updateDoctorStatus,
    UpdateMedicineProduct,
    updatePatientStatus,
    getUserRole,
    getPatient,
    BookDoctor,
    deleteOnePatient,
    deleteOneDoctor,
    updateCompanyStatus,
    deleteOneCompany,
    deleteOneMedicine,
    updateMedicineStatus,
    updateBlogStatus,
    deleteSingleBlog,
    myOrder,


} = require("../api");
const { ConformOrder } = require("../api/Order");

const {
    savedFrormPost, getForumPost, getForumPostbymail, postComment, updateLikeDislike
} = require("../api/forum");
const {
    NextPatient,
    UpdatePatientBooking,
    CancelPatient,
} = require("../lib/Booking");
const { InsertCompany } = require("../lib/company");
const { getDoctorCategory, updateDoctorStatusId, deleteBlog } = require("../lib/users");
const MedicineCollection = require("../models/Medicine");





const router = require("express").Router();

router.get("/data/:id", exampleDataApi);

router.get("/Doctors", BestDoctors);

router.get("/Medicines", BestMedicine);
router.post('/forum', savedFrormPost)
router.patch('/forum/comment/:id', postComment)
router.get('/forum/:category?', getForumPost)
router.get('/api/forum/:mail?', getForumPostbymail)
router.patch('/forum/like/dislike/:id', updateLikeDislike)

router.post("/User", InsertUser);

router.get("/Users", allUser);

router.put("/User/:id", updateOneUser);
router.patch("/user/role/:id", updateUserRole);
router.get("/user/role/:email", getUserRole)

router.post("/Medicines", InsertMedicine);

router.delete("/Medicines/:id", DeleteCartMedicine);

router.get("/CartMedicine", CartMedicine);

router.post("/CartMedicine", InsertCartMedicine);

router.delete("/CartMedicine/:id", DeleteCartItem);

// router.post('/forum', savedFrormPost)

router.delete("/user/:id", deleteOneUser);

router.get("/Medicine/:id", MedicineProduct);

router.get("/Doctor/:id", SingleDoctor);

router.post("/reviewdata", Insertreview);

router.get("/datarev/:id", GetReviewData);

router.get("/CompanyProduct/:name", CompanyProduct);

router.post("/AddProduct", MedicineProductAdd);

router.put("/updateProduct/:id", MedicineUpdateProduct);

router.get("/CompanyDetails/:name", CompanyDetails);

router.get("/Blogs", BlogsData);

router.post("/Blog", InserBlog);

router.post("/Doctor", InsertDoctor);

router.get("/detailsMed/:ID", singleMedicins);

router.put("/Medicine/:id", UpdateMedicineProduct);

router.get("/Doctor/:id", SingleDoctor);

router.post("/Patients", InsertPatient);

router.get("/Patients", AllPatients);

router.get("/NextPatient/:id", NextPatient);

router.put("/UpdatePatientBooking/:id", UpdatePatientBooking);

router.delete("/CancelPatient/:id", CancelPatient);

router.post("/Company", InsertCompany);

router.patch("/Blog/:id", Like);

router.put("/updateQuantity/:id", Quanity);

router.delete("/deleteFullCart/:email", DeleteCart);

router.put("/Blogs/:id", EditOneBlog);

router.get("/Blog/:id", SingleBlogdata);

router.delete("/Blog/:id", deleteOneBlog);

router.get("/Companys", AllCompany);

router.put("/MedicineWish/:id", WishList);

router.post('/order', ConformOrder)
router.get('/detailsMed/:id', singleMedicins)

router.get('/Doctor/:id', SingleDoctor)

router.post('/Patients', InsertPatient)

router.get('/Patients', AllPatients)

router.get('/NextPatient/:id', NextPatient)

router.put('/UpdatePatientBooking/:id', UpdatePatientBooking)

router.delete('/CancelPatient/:id', CancelPatient)

router.post('/Company', InsertCompany)

router.patch('/Blog/:id', Like)

router.put('/updateQuantity/:id', Quanity)

router.delete('/deleteFullCart/:email', DeleteCart)

router.put('/Blogs/:id', EditOneBlog)
router.get('/getPatient/:email', getPatient)
router.post(`/doctor-booking`, BookDoctor)

router.patch('/Doctor/status/:id', updateDoctorStatus)

router.patch('/Patient/status/:id', updatePatientStatus)

router.delete("/Patient/:id", deleteOnePatient);

router.delete('/Doctor/:id', deleteOneDoctor)

router.patch('/Company/status/:id', updateCompanyStatus)

router.delete('/Company/:id', deleteOneCompany)

router.delete('/Med/:id', deleteOneMedicine)

router.patch('/Medicine/status/:id', updateMedicineStatus)

router.patch('/blog/status/:id', updateBlogStatus)

router.delete('/Blog/:id', deleteSingleBlog)

router.get('/Orders', myOrder)

module.exports = router
