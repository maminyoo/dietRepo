const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
  store:String,
  name: String,
  mobile: String,
  fileNumber: String,
  token: String
}, { timestamps: true })

module.exports = mongoose.model('Register', registerSchema)
