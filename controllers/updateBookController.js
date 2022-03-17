const {updateBookService} = require("../services")

module.exports = async function updateBookController(req, res){
    await updateBookService(req.query.name, req.body)
    return res.send(200)
}