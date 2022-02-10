const express = require("express")
const router = express.Router()
const controller = require("./controllers")

router.post("/user", (req, res) => controller.createUserController(req, res))

module.exports = router