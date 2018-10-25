const memberRouter = require('express').Router()
const memberController = require('../controller/memberController.js')

memberRouter.get('/', memberController.show)
memberRouter.get('/add', memberController.showAdd)
memberRouter.post('/add',memberController.add)
memberRouter.get('/edit/:id',memberController.showEdit)
memberRouter.post('/edit/:id',memberController.edit)
memberRouter.get('/delete/:id',memberController.delete)




module.exports = memberRouter
