const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  store: String,
  name: String,
  mobile: String,
  birthday: String,
  dietCount: Number,
  dietDate: String,
  period: Number,
  fileNumber: String,
  token: String,
  lanquage: String
}, { timestamps: true })

module.exports = mongoose.model('Login', loginSchema)
