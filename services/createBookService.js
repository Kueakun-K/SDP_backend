const {BookModel} = require("../models")

module.exports = async function createBookService(data){
    const Book = new BookModel(data)
    return Book.save()
}