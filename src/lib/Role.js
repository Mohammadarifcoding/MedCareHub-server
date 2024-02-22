const UserCollection = require("../models/Users")

const CheckUserAcess = async(email)=>{
    const query = {email : email}
    const result = await UserCollection.find(query)
    return result
}

module.exports = {
    
}