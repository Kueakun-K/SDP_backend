const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userName: {
        type:String,
        require:true
    },
    userLastname: {
        type:String,
        require:true
    },
    userEmail: {
        type:String,
        require:true
    },
    userPassword: {
        type:String,
        require:true
    },
    userRole: {
        type:String,
        default:"User"
    },
    userDate: {
        type:Date,
        default:Date.now
    },
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel