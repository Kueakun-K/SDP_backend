const {BookModel} = require("../models")

module.exports = async function getBookService(name){
    const Book = await BookModel.findOne({bookName: name})
    return Book
}