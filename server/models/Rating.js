const database = require ('../database/index.js')
const {DataTypes , sequelize } = require ('sequelize')




const RateSchema = {
 
  
  Rate : {
    type : DataTypes.INTEGER,
    allowNull: false
 },

 Review : {
    type : DataTypes.STRING
 }
}




// Rating.hasOne(Products)
// Rating.hasOne(Users)

 module.exports = RateSchema