const express = require('express')
const Ask = require('../models/ask')
const router = express.Router()

router.post('/diet/api/ask', async(req, res) => {
  const ask = new Ask(req.body)
  try{
    await ask.save()
    res.status(201).send({status:'ok'})
  }catch (e){
    res.status(400).send(e)
  }
})

module.exports = router
