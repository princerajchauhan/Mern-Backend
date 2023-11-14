const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [20, "Name should be less than 20 character"],
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        maxlength: [10, "Phone number should be of 10 digits"],
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    college:{
        type: String,
        required: true,
        trim: true
    },
    year:{
        type: String,
        required: true,
        trim: true
    },
    check: Boolean,
})

module.exports = mongoose.model("UserDetail", userSchema)