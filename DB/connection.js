const mongoose = require("mongoose")

const connetToDb = (URI) => mongoose.connect(URI)
                            .then((p) => console.log(`Connected to DataBase: ${p.connection.host}`))
                            .catch(err => console.log(err))

module.exports = connetToDb