const express = require("express")
const cors = require("cors")
const connetToDb = require("./DB/connection")
const router = require("./Routes/userRoutes")
const proRouter = require("./Routes/projectRoutes")
const stripe = require("stripe")("sk_test_51O2pl0SGM01vn0zuKIwBY1RFHXOkVkpDUaVxyzpaQO8Oa05d5vQvL79WlYv6UrvioVxclgPOSDuBG4DBPoJ88HcU00HWS0x9PV")

require("dotenv").config()

const port = process.env.PORT

const server = express()
server.use(cors())

server.use(express.json())

const startConnection = async () => {
    try {
        await connetToDb(process.env.Mongo_URI)
        server.listen(port, () => {
            console.log(`Server is listening on PORT: ${port}`)
        })

    } catch (error) {
        console.log(error)
    }
}

startConnection()

server.post('/pay/create-checkout-session', async (req, res) => {
    const { product } = req.body
    console.log(product)
    // res.json(product)
    const lineItems = product.map((prod) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: prod.name
            },
            unit_amount: prod.price*100
        },
        quantity: prod.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    })

    res.json({ id: session.id })
})

server.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to the PrepBytes Clone Poject" })
})

server.use('/api', router)
server.use("/proj", proRouter)



