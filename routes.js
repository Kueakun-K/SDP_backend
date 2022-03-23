const express = require("express")
const router = express.Router()
const controller = require("./controllers")

//User
router.post("/user", (req, res) => controller.createUserController(req, res))
router.get("/user", (req, res) => controller.getUserController(req, res))
router.post("/login", (req, res) => controller.loginController(req, res))

//Book
router.post("/book", (req, res) => controller.createBookController(req, res))
router.get("/book", (req, res) => controller.getAllBookController(req, res))
router.get("/bookid", (req, res) => controller.getBookController(req, res))
router.put("/book", (req, res) => controller.updateBookController(req, res))

//Book Comment
router.post("/comment", (req, res) => controller.commentController(req, res))
router.get("/comment", (req, res) => controller.getCommentController(req, res))

module.exports = router