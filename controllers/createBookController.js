const {createBookService, getBookService} = require("../services")

module.exports = async function createBookController(req, res){
    const {book_name, book_tag, book_description, book_price} = req.body
    if(!book_name || !book_tag || !book_description || !book_price){
        return res.send("กรอกให้ครบ")
    }
    const checkbook = await getBookService(book_name)
    if(checkbook){
        return res.send("หนังสือซ้ำ")
    }
    else{
        await createBookService(req.body)
        return res.send(200)
    }
}