const { OrderDone } = require("../lib/Order")

const ConformOrder = async(req,res)=>{
  
  const body = req.body
  const result = await OrderDone(body)
  res.send(result)

}

module.exports = {
    ConformOrder
}