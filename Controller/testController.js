
const MockData = require("../MockTestData")

const TestData = (req, res) =>{
    res.status(200).send(MockData)
}

module.exports = {TestData}