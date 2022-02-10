const {getUserService} = require("../services")

module.exports = async function getUserController(req, res){
    const user = await getUserService(req.query.userEmail)
    return res.send(user)
}