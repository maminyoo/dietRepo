const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  store: String,
  name: String,
  mobile: String,
  fileNumber: String
}, { timestamps: true })

module.exports = mongoose.model('Login', loginSchema)
