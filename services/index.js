const createUserService = require("./createUserService")
const getUserService = require("./getUserService")
const createBookService = require("./createBookService")
const getBookService = require("./getBookService")
const getAllBookService = require("./getAllBookService")
const updateBookService = require("./updateBookService")
const commentService = require("./commentService")
const getCommentService = require("./getCommentService")

module.exports = {
    createUserService,
    getUserService,
    createBookService,
    getBookService,
    getAllBookService,
    updateBookService,
    commentService,
    getCommentService
}