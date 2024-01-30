const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct } = require('../api')


const router = require('express').Router()

router.get('/data/:id',exampleDataApi)


router.get('/Doctors',BestDoctors)


router.get('/Medicines',BestMedicine)

router.post('/User',InsertUser)

router.get('/Users',allUser)

router.get('/Medicine/:id',MedicineProduct)


module.exports = router