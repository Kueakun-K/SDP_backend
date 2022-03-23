const {commentService} = require("../services")

module.exports = async function commentController(req, res){
    await commentService(req.body)
    return res.send(200)
}