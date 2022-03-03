const {BookModel} = require("../models")

module.exports = async function getAllBookService(){
    const Book = await BookModel.find({}).sort({book_name: 1})
    return Book
}