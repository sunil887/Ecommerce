const Product = require('../models/product');

module.exports = {
    readAllProducts(req,res){
        // .find() returns a promise resolve exec

        Product.find({}).exec((err,products) =>{
            if(err)
                console.log('error in readProducts' + err)
            
            console.log(products); // checking the data to see what we get on th console
            res.status(200).json({products});

        })
    },

    readProduct(req,res){
        
        let id = req.params.id
        
        Product.findById(id).exec((err,product)=>{
            if(err) console.log(err)

            res.status(200).json({product});
        })
    }
    
}
