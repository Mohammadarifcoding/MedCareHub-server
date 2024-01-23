const { exampleDataApi, BestDoctors, BestMedicine, } = require('../api')


const router = require('express').Router()

router.get('/data/:id',exampleDataApi)



router.get('/Doctors',BestDoctors)


router.get('/Medicines',BestMedicine)



module.exports = router