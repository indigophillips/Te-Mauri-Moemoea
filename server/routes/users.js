const express = require('express')

const userDB = require('../db/users')

const router = express.Router()

router.post('/new', (req, res) => {
  const userInfo = req.body

  userDB.addUser(userInfo)
    .then(ids => {
      res.send({id})
    })
})

module.exports = router
