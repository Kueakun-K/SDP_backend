const {BookModel} = require("../models")

module.exports = async function getBookService(field, data){
    if(field == "id"){
        const Book = await BookModel.findOne({_id: data})
        return Book
    }
    else{
        const Book = await BookModel.findOne({book_name: data})
        return Book
    }
}