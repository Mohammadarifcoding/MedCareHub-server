const UserCollection = require("../models/Users")

const CheckUserAcess = async(email)=>{
    const query = {email : email}
    const result = await UserCollection.find(query)
    let roleName = 'user'
    if(result[0].role){
        roleName = result[0].role
    }
    return roleName
}

module.exports = {
    CheckUserAcess
}