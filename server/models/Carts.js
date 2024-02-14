const database = require ('../database/index.js')
const {DataTypes , sequelize } = require ('sequelize')


const CartSchema = {
  idCart : {
       type : DataTypes.INTEGER,
       autoIncrement : true,
       primaryKey : true ,
       allowNull: false
  },
  
 CartQuantity : {
    type : DataTypes.INTEGER,
    allowNull: false
 },

}


// const Carts = database.define('Carts', CartSchema)

// Carts.hasOne(Users)
// Carts.hasMany(Products)



 module.exports = CartSchema