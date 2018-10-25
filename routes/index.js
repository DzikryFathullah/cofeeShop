const router = require('express').Router()
const Controller = require('../controller/index.js')

router.get('/', Controller.show)

module.exports = router
