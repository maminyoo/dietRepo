const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  period: Number,
  fileNumber: String,
  store: String,
  name: String,
  mobile: String,
  birthday: String,
  dietCount: Number,
  dietDate: String,
  country: String,
  token: String,
  lanquage: String
}, { timestamps: true })

module.exports = mongoose.model('Login', loginSchema)
