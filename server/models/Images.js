const database = require ('../database/index.js')
const {DataTypes , sequelize } = require ('sequelize')




const ImagesSchema = {
  idImage : {
       type : DataTypes.INTEGER,
       autoIncrement : true,
       primaryKey : true ,
       allowNull: false
  },
  
 Image1 : {
    type : DataTypes.STRING,
  allowNull:false
 },

 Image2 : {
    type : DataTypes.STRING,
  allowNull:false
 },

Image3 : {
    type : DataTypes.STRING,
    allowNull:false
 },

Image4 : {
    type : DataTypes.INTEGER,
    allowNull:true
 },

 Image5 : {
    type : DataTypes.INTEGER,
    allowNull:true
 },

}


module.exports = ImagesSchema