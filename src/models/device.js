const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  deviceID: String,
  store: String
}, { timestamps: true })

module.exports = mongoose.model('Device', deviceSchema)
