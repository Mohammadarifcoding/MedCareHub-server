const { CheckUserAcess } = require("../lib/Role")

const checkAcess = async(req,res)=>{
    const  email = req.params.email
    const getData = await CheckUserAcess(email)
   console.log(email)
   res.send(getData)
}


module.exports = {
    checkAcess
}