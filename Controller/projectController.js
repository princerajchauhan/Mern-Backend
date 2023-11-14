const data = require("../AllData/ProjectData")

const project = (req, res) =>{
    res.json(data.find(item => item.name === req.params.name))
}

module.exports = project