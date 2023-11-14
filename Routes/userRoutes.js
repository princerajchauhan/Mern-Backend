const { TestData, VideoData, MightData, CheckTest, GetAllTest } = require("../Controller/testController")
const { Register, Login } = require("../Controller/userController")

const router = require("express").Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/mocktest",TestData)
router.get("/video",VideoData)
router.get("/might",MightData)
router.post("/buytest", CheckTest)
router.get("/getalltest/:id", GetAllTest)

module.exports = router