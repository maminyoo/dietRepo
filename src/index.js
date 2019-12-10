require('./globals/global')
// process.env.MONGODB_URL = 'mongodb://127.0.0.1:27017/SibDietAppRepoDB'

const app = require('./app')

const port = process.env.PORT || 5000
app.listen(port, () => print('Server is up on port ' + port))
