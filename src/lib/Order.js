const CartMedicineCollection = require("../models/CartMedicine")
const OrderCollection = require("../models/Order")

const OrderDone = async(Product)=>{
     
    const query = {email : Product.Email }
    console.log(Product.Email)

    const result = await OrderCollection.create(Product)
    const cartDelete = await CartMedicineCollection.deleteMany(query)
    return [result,cartDelete]
}


const getAllOrders = async (queryData) => {
    const result = await OrderCollection.find();
    return result;
  };
  
  
const deleteOrder = async (id) => {
    try {
      const deletedOrder = await OrderCollection.findByIdAndDelete(id);
      return deletedOrder;
    } catch (error) {
      throw new Error("Error deleting user");
    }
  };
  

module.exports = {
    OrderDone,
    getAllOrders,
    deleteOrder,
}