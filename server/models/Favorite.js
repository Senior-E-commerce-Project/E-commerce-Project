const database = require ('../database/index.js')
const {DataTypes , sequelize } = require ('sequelize')




const FavoriteSchema = {
    idFavorite : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true ,
        allowNull: false
   },
   
}



// Favorite.hasMany(Products)
// Favorite.hasMany(Users)

 module.exports = FavoriteSchema