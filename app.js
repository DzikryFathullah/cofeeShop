const express = require('express')
const app = express()
const port = 4000
const router = require('./routes/index.js')
const memberRouter = require('./routes/memberRouter.js')

app.set('view engine','ejs')
// app.use(express.urlencoded(extended:false))
app.use('/', router)
app.use('/member',memberRouter)
app.listen(port,() => console.log(`app listening on port ${port}!`))