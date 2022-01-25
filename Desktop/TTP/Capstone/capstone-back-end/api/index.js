const router = require('express').Router()

router.use('/planets', require('./planets'))

module.exports = router