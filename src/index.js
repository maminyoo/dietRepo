require('./globals/global')
const app = require('./app')
const port = process.env.PORT || 5000
app.listen(port, () => print('Server is up on port ' + port))
