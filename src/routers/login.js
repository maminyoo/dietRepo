const express = require('express')
const Login = require('../models/login')
const router = express.Router()

router.post('/api/login', async (req, res) => {
  const login = new Login(req.body)
  try{
    await login.save()
    res.status(201).send(login)
  }catch (e){
    res.status(500).send(e)
  }
})

module.exports = router
