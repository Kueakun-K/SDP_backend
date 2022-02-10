const {UserModel} = require("../models")

module.exports = async function getUserService(email){
    const User = await UserModel.find({userEmail: email})
    return User
}