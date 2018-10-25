const Model = require('../models/index.js')

class MemberController {

    static show (req,res) {
        Model.member.findAll()
        .then(output => {
            res.render('memberView.ejs',{data:output, index:0})
        })
        .catch(err => {
            res.get(err)
        })
    }

    static showAdd (req,res) {
        res.render('memberAdd.ejs')
    }
}

module.exports = MemberController