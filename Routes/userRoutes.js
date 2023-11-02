const { TestData, VideoData, MightData } = require("../Controller/testController")
const { Register, Login } = require("../Controller/userController")

const router = require("express").Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/mocktest",TestData)
router.get("/video",VideoData)
router.get("/might",MightData)

module.exports = router