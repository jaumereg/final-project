const express = require('express')
const router = express.Router()

const addMatch = require('./handlers/addMatch')
const getAll = require('./handlers/getAll')

router.get('/', getAll)
router.post('/', addMatch)

module.exports = router
