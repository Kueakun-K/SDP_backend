const {BookModel} = require("../models")

module.exports = async function updateBookService(id, data){
    const book = await BookModel.findOneAndUpdate({_id: id}, data);
    return book;
}