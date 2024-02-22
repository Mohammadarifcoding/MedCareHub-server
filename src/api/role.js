const checkAcess = async(req,res)=>{
    const  email = req.params.email
    const getData = await CheckUserAcess(email)
   console.log(email)
   res.send('hello')
}


module.exports = {
    checkAcess
}