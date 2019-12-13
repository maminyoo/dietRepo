const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  fileNumber: String,
  store: String,
  country: String,
  birthday: String,
  dietDate: String,
  period: Number,
  dietCount: Number,
  token: String,
  lanquage: String
}, { timestamps: true })

module.exports = mongoose.model('Login', loginSchema)
