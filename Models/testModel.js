const mongoose = require("mongoose")

const Schema = mongoose.Schema

const testSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true,
    },
    image: String,
    date: String,
    price: Number,
    participants: Number,
    duration: Number,
    userId: String
})

module.exports = mongoose.model("testDetail", testSchema)