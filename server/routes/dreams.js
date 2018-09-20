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

// router.get('/whanau/:whanau_id', (req, res) => {
//   const { whanau_id } = req.params
  
//   dreamDB.getDreamsByWhanauID(dreamer_id)
//     .then(whanauDreams => {
//       res.status(200).json(whanauDreams)
//     })
//     .catch(err => errorHandler(res, err,
//       'error retrieving whanau dreams'
//     ))
// })
// 
router.get('/contributing/:id', (req, res) => {
  const { id } = req.params
  
  dreamDB.getDreamsByContributorID(id)
    .then(contributorDreams => {
      res.status(200).json(contributorDreams)
    })
    .catch(err => errorHandler(res, err,
      'error retrieving contributor dreams'
    ))
})

module.exports = dreamRouter
