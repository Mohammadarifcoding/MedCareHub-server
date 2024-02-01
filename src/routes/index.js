<<<<<<< HEAD

const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser ,MedicineProductAdd, MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails, MedicineUpdateProduct, BlogsData } = require('../api')


const { savedFrormPost } = require('../api/forum')

=======
const {
    exampleDataApi,
    BestDoctors,
    BestMedicine,
    InsertUser,
    allUser,
    MedicineProductAdd,
    MedicineProduct,
    CompanyProduct,
    SingleDoctor,
    CompanyDetails,
    MedicineUpdateProduct,
    updateOneUser,
    deleteOneUser,

} = require('../api')


const {
    savedFrormPost
} = require('../api/forum')

// const { exampleDataApi, BestDoctors, BestMedicine, InsertUser, allUser , MedicineProduct,CompanyProduct, SingleDoctor, CompanyDetails } = require('../api')

>>>>>>> 6a3e4d7b3960c3820c622fc28ade940b0e1669ca
const MedicineCollection = require('../models/Medicine')



const router = require('express').Router()

router.get('/data/:id', exampleDataApi)

<<<<<<< HEAD

router.get('/Doctors', BestDoctors)




=======
router.get('/Doctors', BestDoctors)


>>>>>>> 6a3e4d7b3960c3820c622fc28ade940b0e1669ca
router.get('/Medicines', BestMedicine)

router.post('/forum', savedFrormPost)

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

<<<<<<< HEAD
router.put('/updateProduct/:id',MedicineUpdateProduct)

router.get('/CompanyDetails/:name',CompanyDetails)

router.get('/Blogs',BlogsData)

=======
>>>>>>> 6a3e4d7b3960c3820c622fc28ade940b0e1669ca
module.exports = router