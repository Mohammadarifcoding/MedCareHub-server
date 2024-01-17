const { exampleDataApi, BestDoctors, } = require('../api')


const router = require('express').Router()

router.get('/data/:id',exampleDataApi)



router.get('/Doctors',BestDoctors)


module.exports = router