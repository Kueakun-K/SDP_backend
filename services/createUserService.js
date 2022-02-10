const {UserModel} = require("../models")

module.exports = async function createUserService(data){
    const User = new UserModel(data)
    return User.save()
}
