const express = require('express')

const dreamDB = require('../db/dreams')

const dreamRouter = express.Router()

router.get('/public', (req, res) => {
  dreamDB.getPublicDreams()
    .then(dreams => {
      res.status(200).json(dreams)
    })
})

module.exports = dreamRouter
