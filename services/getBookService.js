const {BookModel} = require("../models")

module.exports = async function getBookService(id){
    const Book = await BookModel.findOne({_id: id})
    return Book
}