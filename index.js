require('./src/global')
require('connect-redis')()
require('dotenv').config()
const app = require('./src/app')
const port = process.env.PORT
app.listen(port, () => print('Server OnPort : ' + port))
