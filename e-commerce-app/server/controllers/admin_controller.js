const User = require('../models/user')
const Products = require('../models/product')


module.exports = {

    getAdminUser(req,res){
        User.find({}).exec((err,users)=>{
                if(err) console.log(err)

                res.status(200).json();
        })  
    },
    createProduct(req,res){
       const {name,description,price} = req.body;
        
       const newProduct = new Products({
            name:name,
            description:description,
            price:price
       })

       newProduct.save();
       res.status(200).json({newProduct})
    },
    updateProduct(req,res){
        let id  = req.params.id;
        //?
        const {name,description,price} = req.body;

        Products.findById(id).exec((err,product)=>{

            product.name = name;
            product.description = description;
            product.price = price;

            product.save();
            res.status(200).json({product})
        })
    },
    deleteProduct(req,res){
        let id = req.params.id

        Products.deleteOne({_id:id}).exec((err,product)=>{
            if(err) console.log(err)
            
            res.status(200).json({product});
            
        })
    }
    
}
