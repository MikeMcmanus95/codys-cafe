// do not modify this file
const router = require('express').Router()

// don't forget that these are already mounted on /api!
router.use('/pugs', require('./pugs.router'))
router.use('/coffee', require('./coffee.router'))

module.exports = router
