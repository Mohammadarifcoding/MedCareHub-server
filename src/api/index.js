
const { getBestDoctor } = require("../lib/users");
const { getDataformuser } = require("../lib");


const exampleDataApi = async(req, res) =>{
    // you  can call the function form the lib for logic here
    console.log('reques accespt ',req.params.id);
    const result = await getDataformuser(req.params.id)
    res.send({message : 'this server is running...',result})
} 

const BestDoctors = async(req,res)=>{

    const queryValue = req.query
   const result = await getBestDoctor(queryValue)
    
    console.log(result)
   res.send(result)

}

module.exports = {exampleDataApi,BestDoctors}