const {sequelize, Sequelize} = require('sequelize')
const mysql = require ('mysql2'); 


const Users = require ('../models/Users.js') 
const Products = require ('../models/Products.js')
const Ratings = require ('../models/Rating.js')
const Carts = require ('../models/Carts.js')
const Favorite = require ('../models/Favorite.js');
const Images = require ('../models/Images.js')







const connection = new Sequelize ('shop','root','Me.inSql@Rbk',{


  host : 'localhost',
  dialect : 'mysql'
})



const user = connection.define("Users", Users)
const product = connection.define("Products", Products)
const Rate = connection.define('Ratings',Ratings)
const Cart = connection.define('Carts',Carts)
const favorite = connection.define('Favorite',Favorite)
const image = connection.define('Images',Images)


user.hasMany(Rate);
user.hasMany(favorite);
user.hasOne(Cart);
user.hasMany(product);
product.hasMany(Rate)
Cart.hasMany(product)
favorite.hasMany(product)
product.hasMany(image)



connection.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = connection
//Don't forget to export what is needed.
