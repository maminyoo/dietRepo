const express = require('express')
const Device = require('../models/device')
const router = new express.Router()

router.post('/api/device', async (req, res) => {
  const device = new Device(req.query)
res.send(device)
  // try {
  //   await device.save()
  //   res.status(201).send({status: 'ok'})
  // }catch (e){
  //   res.status(400).send(e)
  // }
})

module.exports = router
