const cofeeRouter = require('express').Router()
const cofeeController = require('../controller/cofeeController.js')


cofeeRouter.get('/',cofeeController.show)
cofeeRouter.get('/add',cofeeController.showAdd)
cofeeRouter.post('/add',cofeeController.add)


module.exports = cofeeRouter