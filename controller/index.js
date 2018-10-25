
class Controller {

    static show (req,res) {
        let word = "Homepage entrance"
        res.render('index.ejs',{data:word})
    }
    
}

module.exports = Controller