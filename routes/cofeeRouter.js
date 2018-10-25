const cofeeRouter = require('express').Router()
const cofeeController = require('../controller/cofeeController.js')


cofeeRouter.get('/',cofeeController.show)
cofeeRouter.get('/add',cofeeController.showAdd)
cofeeRouter.post('/add',cofeeController.add)
cofeeRouter.get('/edit/:id',cofeeController.showEdit)
cofeeRouter.post('/edit/:id',cofeeController.edit)
cofeeRouter.get('/delete/:id',cofeeController.delete)


module.exports = cofeeRouter