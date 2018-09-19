const path = require('path')
const express = require('express')

const thingRoutes = require('./routes/things')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/things', thingRoutes)

module.exports = server
