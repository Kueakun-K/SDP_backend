const {BookModel} = require("../models")

module.exports = async function getBookService(name){
    const Book = await BookModel.findOne({book_name: name})
    return Book
}