
const { savedFrormPost } = require('../api/forum')
const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails, InsertMedicine, getMedicineByEmail } = require('../api')
const MedicineCollection = require('../models/Medicine')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)




router.get('/Doctors', BestDoctors)



router.get('/Medicines', BestMedicine)

router.post('/Medicines', InsertMedicine)

router.post('/forum', savedFrormPost)

router.post('/User',InsertUser)

router.get('/Users',allUser)

router.get('/Medicine/:id',MedicineProduct)

router.get('/Doctor/:id',SingleDoctor)



router.get('/CompanyProduct/:name',CompanyProduct)


router.get('/CompanyDetails/:name',CompanyDetails)
module.exports = router