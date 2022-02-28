const {createBookService, getBookService} = require("../services")

module.exports = async function createBookController(req, res){
    const {bookName, authorName, Category, Price} = req.body
    if(!bookName || !authorName || !Category || !Price){
        return res.send("กรอกให้ครบ")
    }
    const checkbook = await getBookService(bookName)
    if(checkbook){
        return res.send("หนังสือซ้ำ")
    }
    else{
        await createBookService(req.body)
        return res.send(200)
    }
}