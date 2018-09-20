const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/register', register, token.issue)

function register (req, res, next) {
  db.userExists(req.body.phoneNumber)
    .then(exists => {
      if (exists) {
        res.status(400).send({message: 'User exists'})
      } else {
        db.addUser(req.body)
          .then(() => next())
      }
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.post('/login', login, token.issue)

function login (req, res, next) {
  db.getUserByPhoneNumber(req.body.phoneNumber)
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    message: 'Wrong details'
  })
}

router.get('/:id', (req, res) => { // unused route
  const id = Number(req.params.id)
  db.getUserByID(id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find user')
    })
})

module.exports = router
