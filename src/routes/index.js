
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser ,MedicineProductAdd, MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct, BlogsData } = require('../api')


const { savedFrormPost } = require('../api/forum')

const MedicineCollection = require('../models/Medicine')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)


router.get('/Doctors', BestDoctors)




router.get('/Medicines', BestMedicine)

router.post('/forum', savedFrormPost)

router.post('/User',InsertUser)

router.get('/Users',allUser)

router.get('/Medicine/:id',MedicineProduct)

router.get('/Doctor/:id',SingleDoctor)

router.get('/CompanyProduct/:name',CompanyProduct)

router.post('/AddProduct',MedicineProductAdd)

router.put('/updateProduct/:id',MedicineUpdateProduct)

router.get('/CompanyDetails/:name',CompanyDetails)

router.get('/Blogs',BlogsData)

module.exports = router