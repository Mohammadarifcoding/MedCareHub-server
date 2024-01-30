const { exampleDataApi, BestDoctors, BestMedicine, } = require('../api')
const { savedFrormPost } = require('../api/forum')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)



router.get('/Doctors', BestDoctors)


router.get('/Medicines', BestMedicine)

router.post('/forum', savedFrormPost)






module.exports = router