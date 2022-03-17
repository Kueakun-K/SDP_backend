const {BookModel} = require("../models")

module.exports = async function updateBookService(name, data){
    const book = await BookModel.findOneAndUpdate({book_name: name}, data);
    return book;
}