const bcrypt = require('bcrypt')
const {createUserService} = require("../services")

module.exports = async function createUserController(req, res){
    const {userName, userLastname, userEmail, userPassword} = req.body
    if (!userName || !userLastname || !userEmail || !userPassword){
        return res.send({message: "กรุณากรอกข้อมูลให้ครบถ้วน"})
    }
    const passwordHash = bcrypt.hashSync(userPassword, 10)
    const data = {userName, userLastname, userEmail, userPassword:passwordHash}
    await createUserService(data)
    return res.send(200) //200 == OK
}