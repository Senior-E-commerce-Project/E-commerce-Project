const database = require ('../database/index.js')
const {DataTypes , sequelize } = require ('sequelize')




const ProductSchema = {
  idProduct : {
       type : DataTypes.INTEGER,
       autoIncrement : true,
       primaryKey : true ,
       allowNull: false
  },
  
 ProductName : {
    type : DataTypes.STRING,
    allowNull: false
 },

 ProductDescription : {
    type : DataTypes.STRING,
    allowNull: false
 },

ProductPrice : {
    type : DataTypes.STRING,
    allowNull: false
 },

ProductAvailability : {
    type : DataTypes.BOOLEAN,
 },

 ProductCategory : {
    type : DataTypes.ENUM(['Electronics','Clothes','Furniture','Cosmetics'])
 },
 
 ProductAverageRating : {
    type : DataTypes.INTEGER,
    defaultValue: 0
 },

}


// const Products = database.define('Products', ProductSchema)

// Products.hasMany(Users)
// Products.hasMany(Rating)
// Products.hasMany(Carts)
// Products.hasMany(Favorite)


module.exports = ProductSchema