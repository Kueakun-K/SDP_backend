const express = require("express")
const router = express.Router()
const controller = require("./controllers")

router.post("/user", (req, res) => controller.createUserController(req, res))
router.get("/user", (req, res) => controller.getUserController(req, res))

module.exports = router