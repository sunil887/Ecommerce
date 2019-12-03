module.exports = {

    login(req,res){
        let data = req.body
        res.status(200).json({data})
    }
}
