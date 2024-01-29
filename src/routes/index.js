const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser } = require('../api')


const router = require('express').Router()

router.get('/data/:id',exampleDataApi)


router.get('/Doctors',BestDoctors)


router.get('/Medicines',BestMedicine)

router.post('/User',InsertUser)

router.get('/Users',allUser)



module.exports = router