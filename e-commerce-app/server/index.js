
//Enables the .env file, therefore add a env property to process object.
//Recommend to require it at the top of the file
const result = require('dotenv').config();
//console.log(result)

//Middlewares
//Configure body-parser so you can retrieve values from the req.body, if not the req.body will be undefined.
const bodyParser = require('body-parser');

//Require the session for saving user data and giving a user a unique experience.
const session = require("express-session");

//use cors for enable cross origin requests
const cors = require('cors');

//Controllers
//These are how we define our endpoints
//Set your admin functionality

const adminController = require('./controllers/admin_controller');
const cloudinaryController = require('./controllers/cloudinary_controller');
const productsController = require('./controllers/products_controller');
const userController = require('./controllers/user_controller');

const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Define the Port your will be running your server on.
//NOTE: Make sure the Port is the same as the proxy.

const PORT = 5000;

// connect the mongodb database by using connect method 
//console.log("env"  + process.env)
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true},err =>{
    if(err)
        console.log('mongo Error' + err)
    else
        console.log('connected to Database');
});


//middleware
//For initializing the req.body. If the middleware is not used, the req.body is undefined.
app.use(bodyParser.json());

//for storing th e cookie for user 
app.use(session({
    secret:process.env.SESSION_SECRET, // create a secret for the cookie to store it 
    resave:false, // this for resavingthe cookie false if true can cause a memory leak
    saveUninitialized : false, //saveUnitialized best false, unless connect to a database.
    cookie:{
        maxAge:1000*60*60*24*14 // the max age of the cookie
    }
}));

app.use(cors()) /// for cross origin request

setTimeout(()=>{
    //read the user session 
        //app.get('api/user-data',userController.readUserData);

        //add a item to cart
        //app.post('api/user-data/cart',userController.addToCart);

        //remove an item to  cart 
        //app.post('/api/user-data/cart:id',userController.removeFromCart);

        //when user login
        app.post('/api/login',userController.login)

        //when logout
        //app.post('api/logout',userController.logout);
    
    // Products Endpoints
        
        //getting all products
        app.get('/api/products',productsController.readAllProducts)

        //getting a specified products
        app.get('/api/products/:id',productsController.readProduct);

     //Admin Endpoints

        // get the admin user
        app.get('/api/users',adminController.getAdminUser)

        //when a admin creates a product 
        app.post('/api/products',adminController.createProduct)

        // when admin update a product
        app.put('/api/products/:id',adminController.updateProduct)

        //when admin delete a product
        app.delete('/api/products/:id',adminController.deleteProduct)

        app.listen(PORT,()=> console.log('listening on port ' + PORT))    
    //

},200) // 200 so that app first connect to database then to endpoints