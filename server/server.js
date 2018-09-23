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
  {name: 'Whanau', completed: 2, remaining: 3},
  {name: 'Spiritual', completed: 3, remaining: 2},
  {name: 'Mental', completed: 1, remaining: 4},
  {name: 'Physical', completed: 2, remaining: 3}

]

server.get('/api/v1/dummydata', (req, res) => {
  res.send(data)
})

module.exports = server
