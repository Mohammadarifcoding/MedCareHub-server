<<<<<<< HEAD
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser ,MedicineProductAdd, MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct } = require('../api')
=======

const { savedFrormPost } = require('../api/forum')
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails } = require('../api')
>>>>>>> 9759374c60b1da031acd58f846367654cd60f11c
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
module.exports = router