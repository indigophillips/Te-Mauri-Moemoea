const express = require('express')

const dreamDB = require('../db/dreams')
const errorHandler = require('./errorHandler')

const dreamRouter = express.Router()

router.get('/public', (req, res) => {
  dreamDB.getPublicDreams()
    .then(dreams => {
      res.status(200).json(dreams)
    })
    .catch(err => errorHandler(res, err,
      'error retrieving public dreams'
    ))
})

router.get('/personal/:dreamer_id', (req, res) => {
  const { dreamer_id } = req.params
  
  dreamDB.getPersonalDreamsByUserID(dreamer_id)
    .then(personalDreams => {
      res.status(200).json(personalDreams)
    })
    .catch(err => errorHandler(res, err,
      'error retrieving personal dreams'
    ))
})

module.exports = dreamRouter
