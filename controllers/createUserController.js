const bcrypt = require('bcryptjs')
const {createUserService, getUserService} = require("../services")

module.exports = async function createUserController(req, res){
    const {userName, userLastname, userEmail, userPassword, passwordRepeat} = req.body
    if (!userName || !userLastname || !userEmail || !userPassword || !passwordRepeat){
        return res.send({message: "กรุณากรอกข้อมูลให้ครบถ้วน"})
    }
    const checkEmail = await getUserService(userEmail)
    if (checkEmail){
        return res.send({message: "Email ซ้ำ"})
    }
    if (userPassword == passwordRepeat){
        var decimal =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if(userPassword.match(decimal)){
            const passwordHash = bcrypt.hashSync(userPassword, 10)
            const data = {userName, userLastname, userEmail, userPassword:passwordHash}
            await createUserService(data)
            return res.send(200) //200 == OK
        }    
        else{
            return res.send({message: "Password ไม่ตรงเงื่อนไข"})
        }
    }
    else{
        return res.send({message: "Password ไม่ตรงกัน"})
    }
}