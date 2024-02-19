const { OrderDone, getAllOrders, deleteOrder } = require("../lib/Order")

const ConformOrder = async(req,res)=>{
  
  const body = req.body
  const result = await OrderDone(body)
  res.send(result)

}

const AllOrders = async (req, res) => {
  const queryValue = req.query
  const result = await getAllOrders(queryValue)
  res.send(result)
}

const deleteOneOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await deleteOrder(id);
    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      data: deletedOrder,
    });
  } catch (error) {
    console.error("Error deleting Order:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


module.exports = {
    ConformOrder,
    AllOrders,
    deleteOneOrder,
}