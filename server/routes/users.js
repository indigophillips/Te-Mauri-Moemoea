const express = require('express')

const userDB = require('../db/users')

const router = express.Router()

router.post('/new', (req, res) => {
  const userInfo = req.body

  userDB.addUser(userInfo)
    .then(ids => {
      res.status(200).send({id})
    })
    .catch(err => {
      res.status(500).send({
        message: 'error retrieving public dreams',
        err
      })
    })
})

module.exports = router
