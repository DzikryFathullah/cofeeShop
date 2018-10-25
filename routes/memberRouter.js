const memberRouter = require('express').Router()
const memberController = require('../controller/memberController.js')

memberRouter.get('/', memberController.show)
memberRouter.get('/add', memberController.showAdd)
memberRouter.post('/add',memberController.add)

module.exports = memberRouter
