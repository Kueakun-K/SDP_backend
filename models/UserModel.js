const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    user_email: String,
    user_name: String,
    user_password : String,
    user_Role: {
        type:String,
        default:"User"
    }
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel