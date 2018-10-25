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

    static add (req,res) {
        let memberObj = {}
        memberObj.name = req.body.name
        memberObj.email = req.body.email
        memberObj.phone = req.body.phone
        memberObj.createdAt = new Date()
        memberObj.updatedAt = new Date()
        Model.member.create(memberObj)
        .then(() => {
            res.redirect('/member')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static showEdit (req,res) {
        Model.member.findOne({where:{id:req.params.id}})
        .then(member => {
            res.render('memberEdit.ejs',{data:member})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static edit (req,res) {
        Model.member.update(req.body,{where:{id:req.params.id}})
        .then(() => {
            res.redirect('/member')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete (req,res) {
        Model.member.destroy({where:{id:req.params.id}})
        .then(() => {
            res.redirect('/member')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = MemberController