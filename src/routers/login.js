const express = require('express')
const Login = require('../models/login')
const router = express.Router()

router.post('/diet/api/login', async (req, res) => {
  const login = new Login(req.body)
  try{
    await login.save()
    res.status(201).send({status:'ok'})
  }catch (e){
    res.status(500).send(e)
  }
})

module.exports = router
