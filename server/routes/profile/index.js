const express = require('express')
const router = express.Router()

const updateProfile = require('./handlers/updateProfile')

router.put('/:id', updateProfile)

module.exports = router
