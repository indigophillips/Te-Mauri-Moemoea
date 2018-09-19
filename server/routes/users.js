const express = require('express')

const userDB = require('../db/users')

const router = express.Router()

router.post('/user', (req, res) => {
  const userInfo = req.body

  users.addUser(userInfo)
    .then(ids => {
      res.send({id})
    })
})

module.exports = router
