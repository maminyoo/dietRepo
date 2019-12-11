const express = require('express')
const Payment = require('../models/payment')
const router = express.Router()

router.post('/api/payment', async (req, res) =>{
  const payment = new Payment(req.body)
  try {
    await payment.save()
    res.status(201).send({status: 'ok'})
  }catch (e){
    res.status(400).send(e)
  }
})

module.exports = router
