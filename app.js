const express = require('express')
const logger = require('morgan')
const cors = require('cors')


// const productsRouter = require('./routes/api/products')
// const shopsRouter = require('./routes/api/shops')
// const ordersRouter = require('./routes/api/orders')
const authRouter = require('./routes/api/user')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())


app.use('/api/auth', authRouter)
// app.use('/api/', productsRouter)
// app.use('/api/shops',  shopsRouter)
// app.use('/api/order',  ordersRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
