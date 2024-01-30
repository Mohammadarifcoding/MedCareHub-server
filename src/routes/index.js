const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct, SingleDoctor } = require('../api')


const router = require('express').Router()

router.get('/data/:id',exampleDataApi)


router.get('/Doctors',BestDoctors)


router.get('/Medicines',BestMedicine)

router.post('/User',InsertUser)

router.get('/Users',allUser)

router.get('/Medicine/:id',MedicineProduct)

router.get('/Doctor/:id',SingleDoctor)

module.exports = router