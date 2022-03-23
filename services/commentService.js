const {BookCommentModel} = require("../models")

module.exports = async function commentService(data){
    const Comment = new BookCommentModel(data)
    return Comment.save()
}