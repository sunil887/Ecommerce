const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const product  = new Schema({
    name:String,
    description:String,
    price:Number
})


// to create the model use model schema and it's name

module.exports = mongoose.model('Product',product);

