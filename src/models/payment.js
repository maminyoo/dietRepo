const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  store: String,
  name: String,
  mobile: String,
  fileNumber: String,
  main: String,
  curency: String,
  trackingCode: String
}, { timestamps: true })

module.exports = mongoose.model('Payment', paymentSchema)
