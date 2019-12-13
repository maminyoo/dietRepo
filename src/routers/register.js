const express = require('express')
const Register = require('../models/register')
const router = express.Router()

router.post('/api/register', async(req, res) => {
  const register = new Register(req.body)
  try{
    await register.save()
    res.status(201).send({status:'ok'})
  }catch (e){
    res.status(400).send(e)
  }
})

module.exports = router
