const bcrypt = require('bcryptjs')
const {createUserService, getUserService} = require("../services")

module.exports = async function createUserController(req, res){
    const {user_email, user_name, user_password, passwordRepeat} = req.body
    if (!user_email || !user_name || !user_password || !passwordRepeat ){
        return res.send("กรุณากรอกข้อมูลให้ครบถ้วน")
    }

    const checkEmail = await getUserService("user_email", user_email)
    if (checkEmail){
        return res.send("Email ซ้ำ")
    }

    const checkname = await getUserService("user_name", user_name)
    if (checkname){
        return res.send("Name ซ้ำ")
    }

    if (user_password == passwordRepeat){
        var decimal =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if(user_password.match(decimal)){
            const passwordHash = bcrypt.hashSync(user_password, 10)
            const data = {user_email, user_name, user_password:passwordHash}
            await createUserService(data)
            return res.send(200) //200 == OK
        }    
        else{
            return res.send("Password ไม่ตรงเงื่อนไข")
        }
    }
    else{
        return res.send("Password ไม่ตรงกัน")
    }
}