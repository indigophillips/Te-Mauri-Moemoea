const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getThings()
    .then(things => {
      res.json({things})
    })
})

module.exports = router
