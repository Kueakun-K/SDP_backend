const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    bookName: String,
    authorName: String,
    Category: String,
    Price: Number,
    Rating:{
        type: Number,
        default:0
    } , 
    View:{
        type: Number,
        default:0
    },
    Date: {
        type:Date,
        default:Date.now
    }
})

const BookModel = mongoose.model("Book",BookSchema) 

module.exports = BookModel