const {UserModel} = require("../models")

module.exports = async function createUserService(user){
    const User = new UserModel(user)
    return User.save()
}
