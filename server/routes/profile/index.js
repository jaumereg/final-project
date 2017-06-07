const express = require('express')
const router = express.Router()

const updateProfile = require('./handlers/updateProfile')
const getProfile = require('./handlers/getProfile')

router.get('/', getProfile)
router.put('/:id', updateProfile)

module.exports = router
