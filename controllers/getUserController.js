const {getUserService} = require("../services")

module.exports = async function getUserController(req, res){
    const u_name = req.query.user_name
    const u_email = req.query.user_email
    if(u_name){
        const user = await getUserService("user_name", u_name)
        return res.send(user)
    }
    else{
        const user = await getUserService("user_email", u_email)
        return res.send(user)
    }
    
}