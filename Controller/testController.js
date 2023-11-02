const Might = require("../AllData/Mightbe")
const MockData = require("../AllData/MockTestData")
const Videos = require("../AllData/Videos")

const TestData = (req, res) =>{
    res.status(200).send(MockData)
}

const VideoData = (req, res) =>{
    res.status(200).send(Videos)
}

const MightData = (req, res) =>{
    res.status(200).send(Might)
}

module.exports = {TestData, VideoData, MightData}