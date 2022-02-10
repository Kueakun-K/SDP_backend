const {createUserService} = require("../services")

module.exports = async function createUserController(req, res){
    await createUserService(req.body)
    return res.send(200) //200 == OK
}