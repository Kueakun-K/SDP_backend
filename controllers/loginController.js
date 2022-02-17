const bcrypt = require("bcrypt")
const {getUserService} = require("../services")

module.exports = async function loginController(req, res){
    const {userEmail, userPassword} = req.body
    if (!userEmail || !userPassword){
        return res.send({message: "กรุณากรอกข้อมูลให้ครบถ้วน"})
    }
    const checkEmail = await getUserService(userEmail)
    if(checkEmail){
        const compare = bcrypt.compareSync(userPassword, checkEmail.userPassword)
        if(compare){
            return res.send({message: "Login success"})
        }
        else{
            return res.send({message: "Login fail"})
        }
    }
    else{
        return res.send({message: "Login fail"})
    }
}