const UserCollection = require("../models/Users")

const CheckUserAcess = async(email)=>{
    const query = {email : email}
    const result = await UserCollection.find(query)
    let roleName = 'user'
    console.log(result[0].role)
    if(result[0].role){
        roleName = result[0].role
    }
    return roleName
}

module.exports = {
    CheckUserAcess
}