const express = require("express")
const router = express.Router()
const controller = require("./controllers")


router.post("/user", (req, res) => controller.createUserController(req, res))
router.get("/user", (req, res) => controller.getUserController(req, res))
router.post("/login", (req, res) => controller.loginController(req, res))
router.post("/book", (req, res) => controller.createBookController(req, res))
router.get("/book", (req, res) => controller.getAllBookController(req, res))

module.exports = router