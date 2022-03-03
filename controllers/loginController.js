const bcrypt = require("bcryptjs")
const {getUserService} = require("../services")

module.exports = async function loginController(req, res){
    const {user_name, user_password} = req.body
    if (!user_name || !user_password){
        return res.send("กรุณากรอกข้อมูลให้ครบถ้วน")
    }
    const checkname = await getUserService("user_name", user_name)
    if(checkname){
        const compare = bcrypt.compareSync(user_password, checkname.user_password)
        if(compare){
            return res.send(200)
        }
        else{
            return res.send("Login Fail")
        }
    }
    else{
        return res.send("Login Fail")
    }
}