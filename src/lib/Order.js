const CartMedicineCollection = require("../models/CartMedicine")
const OrderCollection = require("../models/Order")

const OrderDone = async(Product)=>{
     
    const query = {email : Product.Email }
    console.log(Product.Email)

    const result = await OrderCollection.create(Product)
    const cartDelete = await CartMedicineCollection.deleteMany(query)
    return [result,cartDelete]
}

module.exports = {
    OrderDone
}