const project = require("../Controller/projectController")

const proRouter = require("express").Router()

proRouter.get("/project/:name", project)

module.exports = proRouter