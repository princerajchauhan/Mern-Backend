const Might = require("../AllData/Mightbe")
const MockData = require("../AllData/MockTestData")
const Videos = require("../AllData/Videos")
const Test = require("../Models/testModel")

const TestData = (req, res) =>{
    res.status(200).send(MockData)
}

const VideoData = (req, res) =>{
    res.status(200).send(Videos)
}

const MightData = (req, res) =>{
    res.status(200).send(Might)
}

const CheckTest = async(req, res) =>{
    try {
        const detail = req.body
        const duplicate = await Test.findOne({name: detail.name})
        if (duplicate) {
            res.send({msg: "you already buy the test", msg2: 'false'})
        }
        else{
            const test = await Test.create(detail)
            res.status(200).send({msg2: true, test})
        }
    } catch (error) {
        res.status(500).send({msg: "error"})
    }
}

const GetAllTest = async(req, res) =>{
    try {
        const alltest = await Test.find()
        res.status(200).send(alltest)
    } catch (error) {
        res.status(500).send({msg: "error"})
    }
}

module.exports = {TestData, VideoData, MightData, CheckTest, GetAllTest}