const express = require('express')
require('./db/mongoose')
const device   = require('./routers/device')
const register = require('./routers/register')
const login    = require('./routers/login')
const payment  = require('./routers/payment')

const app = express()
app.listen(process.env.PORT || 80, '0.0.0.0');

app.use(express.json())
app.use(device)
app.use(register)
app.use(login)
app.use(payment)


module.exports = app
