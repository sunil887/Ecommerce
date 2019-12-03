const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const user = new Schema({
    // this is where uer will login
    name:String,
    email:String,
    username:String,
    auth0_id:String
});

module.exports = mongoose.model('User',user)