const {UserModel} = require("../models")

module.exports = async function getUserService(email){
    const User = await UserModel.findOne({userEmail: email})
    return User
}