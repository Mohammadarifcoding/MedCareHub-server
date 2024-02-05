

const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser, MedicineProductAdd, MedicineProduct, CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct, BlogsData,
    updateOneUser,
    deleteOneUser,

    singleMedicins, InserBlog,
    InsertDoctor, } = require('../api')
   





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
    savedFrormPost, getForumPost
} = require('../api/forum')
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

router.post('/User', InsertUser)

router.get('/Users', allUser)

router.put('/User/:id', updateOneUser)

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




module.exports = router