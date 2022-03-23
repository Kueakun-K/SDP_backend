const {BookCommentModel} = require("../models")

module.exports = async function getCommentService(field, data){
    if(field == "id"){
        const Comment = await BookCommentModel.find({book_id: data})
        return Comment
    }
    else{
        const Comment = await BookCommentModel.find({user_name: data})
        return Comment
    }
}