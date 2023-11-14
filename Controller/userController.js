
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Register = async (req, res) => {
    try {
        const details = req.body
        const duplicate = await User.findOne({ email: details.email })
        if (duplicate) {
            return res.status(200).json({ msg: "user already registered.", msg2: false })
        }
        const hashedPassword = await bcrypt.hash(details.password, 10)
        const token = jwt.sign({ email: details.email }, process.env.SECRET_KEY, { expiresIn: '24h' })
        const user = await User.create({ ...details, password: hashedPassword })
        res.status(200).send({ msg: "user registered successfully", msg2: true, token, name: user.name, userId: user._id })
    } catch (error) {
        res.status(500).json({ msg: "Error occured: user not created" })
    }
}

const Login = async (req, res) => {
    try {
        const details = req.body
        const find = await User.findOne({ email: details.email })
        if (!find) {
            return res.status(200).send({ msg: "you are not a registerd user", msg2: false })
        }
        const validate = await bcrypt.compare(details.password, find.password)
        if (!validate) {
            return res.status(200).send({ msg: "email and password does not match", msg2: false })
        }
        const token = jwt.sign({ email: details.email }, process.env.SECRET_KEY, { expiresIn: "24h" })
        return res.status(200).send({ msg: "user successfully logged in.", msg2: true, name: find.name, userId: find.name, token })
    } catch (error) {

    }
}


module.exports = { Register, Login }