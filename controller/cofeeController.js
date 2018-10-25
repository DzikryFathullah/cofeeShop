const Model = require('../models/index.js')

class CofeeController {

    static show (req,res) {
        Model.cofee.findAll()
        .then(output => {
            res.render('cofeeView.ejs',{data:output})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showAdd (req,res) {
        res.render('cofeeAdd.ejs')
    }

    static add (req,res) {
        let cofeeObj = {}
        cofeeObj.cofee = req.body.cofee
        cofeeObj.price = req.body.price
        cofeeObj.picture = req.body.picture
        cofeeObj.createdAt = new Date()
        cofeeObj.UpdatedAt = new Date()
        Model.cofee.create(cofeeObj)
        .then(() => {
            res.redirect('/cofee')
        })
        .catch((err) => {
            res.send(err)
        })
    }

}

module.exports = CofeeController