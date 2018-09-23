const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')
const dreamRoutes = require('./routes/dreams')
const authRoutes = require('./routes/auth')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/dreams', dreamRoutes)
server.use('/api/v1/auth', authRoutes)

const data = [
  {name: 'Whanau', color1: 'darkred', color2: 'red', completed: 2, remaining: 5},
  {name: 'Spiritual', color1: 'orangered', color2: 'orange', completed: 3, remaining: 2},
  {name: 'Mental', color1: 'darkblue', color2: 'blue', completed: 1, remaining: 7},
  {name: 'Physical', color1: 'darkgreen', color2: 'green', completed: 2, remaining: 2}
]

server.get('/api/v1/dummydata', (req, res) => {
  res.send(data)
})

module.exports = server
