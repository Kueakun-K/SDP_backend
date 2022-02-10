const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userName: String,
    userLastname: String,
    userEmail: String,
    userPassword: String,
    userRole: {
        type:String,
        default: "User"
    },
    userDate: {
        type:Date,
        default:Date.now
    },
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel