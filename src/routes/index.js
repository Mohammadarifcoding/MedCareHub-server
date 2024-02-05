

// const { savedFrormPost } = require('../api/forum')
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser, MedicineProductAdd,
    MedicineProduct, CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct,InsertMedicine,
    InsertCartMedicine,
    CartMedicine,
    BlogsData,
    updateOneUser,
    deleteOneUser,
    DeleteCartMedicine, UpdateMedicineProduct,
    singleMedicins, InserBlog,
    InsertDoctor } = require('../api')



   





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
    savedFrormPost, getForumPost, getForumPostbymail
} = require('../api/forum')
const { NextPatient, UpdatePatientBooking, CancelPatient } = require('../lib/Booking')
const { getDoctorCategory } = require('../lib/users')
const MedicineCollection = require('../models/Medicine')

// const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails } = require('../api')

// const MedicineCollection = require('../models/Medicine')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)

router.get('/Doctors', BestDoctors)

router.get('/Medicines', BestMedicine)

router.post('/forum', savedFrormPost)

router.get('/forum/:category?', getForumPost)
router.get('/foram/:mail?', getForumPostbymail)

router.post('/User', InsertUser)

router.get('/Users', allUser)

router.put('/User/:id', updateOneUser)

router.post('/Medicines', InsertMedicine)

router.delete('/Medicines/:id', DeleteCartMedicine)

router.get('/CartMedicine', CartMedicine)

router.post('/CartMedicine', InsertCartMedicine)

// router.post('/forum', savedFrormPost)

router.delete('/user/:id', deleteOneUser)

router.get('/Medicine/:id', MedicineProduct)

router.get('/Doctor/:id', SingleDoctor)

router.get('/CompanyProduct/:name', CompanyProduct)

router.post('/AddProduct', MedicineProductAdd)

router.put('/updateProduct/:id', MedicineUpdateProduct)

router.get('/CompanyDetails/:name', CompanyDetails)

router.get('/Blogs', BlogsData)

router.post('/Blog', InserBlog)

router.post('/Doctors', InsertDoctor)

router.get('/detailsMed/:id',singleMedicins)


router.put('/Medicine/:id',UpdateMedicineProduct)

router.get('/Doctor/:id',SingleDoctor)



router.get('/NextPatient/:id', NextPatient)

router.put('/UpdatePatientBooking/:id', UpdatePatientBooking)

router.delete('/CancelPatient/:id', CancelPatient)

module.exports = router
