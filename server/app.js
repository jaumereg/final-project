const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesMatches = require('./routes/matches')
const routesMatch = require('./routes/match')

const routesProfile = require('./routes/profile')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client')))

app.use('/api/matches', routesMatches)
app.use('/api/match', routesMatch)
app.use('/api/profile', routesProfile)

module.exports = app
