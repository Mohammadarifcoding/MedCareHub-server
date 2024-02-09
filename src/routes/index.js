

// const { savedFrormPost } = require('../api/forum')
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser, MedicineProductAdd,
    MedicineProduct, CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct, InsertMedicine,
    InsertCartMedicine,
    CartMedicine,
    DeleteCartMedicine,
    BlogsData,
    updateOneUser,
    deleteOneUser,
    SingleBlog,
    singleMedicins, InserBlog,Insertreview,
    InsertDoctor,
GetReviewData,
UpdateMedicineProduct,
    InsertPatient, AllPatients, Like, DeleteCartItem, Quanity, DeleteCart, EditOneBlog} = require('../api')






// const {
//     exampleDataApi,
//     BestDoctors,
//     BestMedicine,
//     InsertUser,
//     allUser,
//     MedicineProductAdd,
//     MedicineProduct,
//     CompanyProduct,
//     SingleDoctor,
//     CompanyDetails,


// } = require('../api')


const {
    savedFrormPost, getForumPost, getForumPostbymail, postComment
} = require('../api/forum')
const { NextPatient, UpdatePatientBooking, CancelPatient } = require('../lib/Booking')
// const { getDoctorCategory } = require('../lib/users')
const MedicineCollection = require('../models/Medicine')

// const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails } = require('../api')

// const MedicineCollection = require('../models/Medicine')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)

router.get('/Doctors', BestDoctors)

router.get('/Medicines', BestMedicine)

router.post('/forum', savedFrormPost)
router.patch('/forum/comment/:id', postComment)
router.get('/forum/:category?', getForumPost)
router.get('/api/forum/:mail?', getForumPostbymail)

router.post('/User', InsertUser)

router.get('/Users', allUser)

router.put('/User/:id', updateOneUser)

router.post('/Medicines', InsertMedicine)

router.delete('/Medicines/:id', DeleteCartMedicine)

router.get('/CartMedicine', CartMedicine)

router.post('/CartMedicine', InsertCartMedicine)

router.delete('/CartMedicine/:id', DeleteCartItem)

// router.post('/forum', savedFrormPost)

router.delete('/user/:id', deleteOneUser)

router.get('/Medicine/:id', MedicineProduct)

router.get('/Doctor/:id', SingleDoctor)

router.post('/reviewdata', Insertreview)

router.get('/datarev/:id',GetReviewData)

router.get('/CompanyProduct/:name', CompanyProduct)

router.post('/AddProduct', MedicineProductAdd)

router.put('/updateProduct/:id', MedicineUpdateProduct)

router.get('/CompanyDetails/:name', CompanyDetails)

router.get('/Blogs', BlogsData)

router.post('/Blog', InserBlog)

router.post('/Doctors', InsertDoctor)

router.get('/detailsMed/:ID', singleMedicins)


router.put('/Medicine/:id', UpdateMedicineProduct)

router.get('/Doctor/:id', SingleDoctor)

router.post('/Patients', InsertPatient)

router.get('/Patients', AllPatients)

router.get('/NextPatient/:id', NextPatient)

router.put('/UpdatePatientBooking/:id', UpdatePatientBooking)

router.delete('/CancelPatient/:id', CancelPatient)


router.patch('/Blog/:id', Like)

router.put('/updateQuantity/:id',Quanity)

router.delete('/deleteFullCart/:email',DeleteCart)

router.put('/Blogs/:id', EditOneBlog)

module.exports = router
