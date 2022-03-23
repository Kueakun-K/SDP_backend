const createUserController = require("./createUserController")
const getUserController = require("./getUserController")
const loginController = require("./loginController")
const createBookController = require("./createBookController")
const getAllBookController = require("./getAllBookController")
const updateBookController = require("./updateBookController")
const getBookController = require("./getBookController")
const commentController = require("./commentController")
const getCommentController = require("./getCommentController")

module.exports = {
    createUserController,
    getUserController,
    loginController,
    createBookController,
    getAllBookController,
    updateBookController,
    getBookController,
    commentController,
    getCommentController
}