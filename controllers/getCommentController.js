const {getCommentService} = require("../services")

module.exports = async function getCommentController(req, res){
    const comment = await getCommentService("id",req.query.id)
    return res.send(comment)
}