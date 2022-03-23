const {getBookService} = require("../services")

module.exports = async function getBookController(req, res){
    const book = await getBookService(req.query.id)
    return res.send(book)
}