const mongoose = require('mongoose')

const askSchema = new mongoose.Schema({
  store: String,
  name: String,
  mobile: String,
  fileNumber: String,
  token: String,
  url: String,
  askID: String
}, { timestamps: true })

module.exports = mongoose.model('Ask', askSchema)
