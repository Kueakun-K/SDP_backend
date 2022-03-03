const {getAllBookService} = require("../services")

module.exports = async function getAllBookController(req, res){
    const book = await getAllBookService()
    return res.send(book)
}