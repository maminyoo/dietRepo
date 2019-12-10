const express = require('express')
const Device = require('../models/device')
const router = express.Router()

router.post('/api/device', async (req, res) => {
  const device = new Device(req.query)
  try {
    await device.save()
    res.status(201).send({status: 'ok'})
  }catch (e){
    res.status(400).send(e)
  }
})

module.exports = router
