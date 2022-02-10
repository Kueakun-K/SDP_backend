const bcrypt = require('bcrypt')
const {UserModel} = require("../models")

module.exports = async function createUserService(data){
    const {userName, userLastname, userEmail, userPassword} = data
    const passwordHash = bcrypt.hashSync(userPassword, 10)
    const User = new UserModel({
        userName,
        userLastname,
        userEmail,
        userPassword:passwordHash
    })
    return User.save()
}
