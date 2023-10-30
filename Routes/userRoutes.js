const { TestData } = require("../Controller/testController")
const { Register, Login } = require("../Controller/userController")

const router = require("express").Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/mocktest",TestData)

module.exports = router