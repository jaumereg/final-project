const express = require('express')
const router = express.Router()

const updateMatch = require('./handlers/updateMatch')
const removeMatch = require('./handlers/removeMatch')

router.put('/:id', updateMatch)
router.delete('/:id', removeMatch)

module.exports = router
