const {UserModel} = require("../models")

module.exports = async function getUserService(field, data){
    if(field == "user_name"){
        const User = await UserModel.findOne({user_name: data})
        return User
    }
    else{
        const User = await UserModel.findOne({user_email: data})
        return User
    }
}