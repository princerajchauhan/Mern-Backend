const express = require("express")
const cors = require("cors")
const connetToDb = require("./DB/connection")
const router = require("./Routes/userRoutes")
require("dotenv").config()

const port = process.env.PORT

const server = express()
server.use(cors())

server.use(express.json())

const startConnection = async() =>{
    try {
        await connetToDb(process.env.Mongo_URI)
        server.listen(port, ()=>{
            console.log(`Server is listening on PORT: ${port}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

startConnection()

server.get('/', (req, res) =>{
    res.status(200).json({msg: "Welcome to the PrepBytes Clone Poject"})
})

server.use('/api',router)



