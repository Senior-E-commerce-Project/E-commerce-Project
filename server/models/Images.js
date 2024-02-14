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
  
 },

 Image2 : {
    type : DataTypes.STRING,
  
 },

Image3 : {
    type : DataTypes.STRING,
    
 },

Image4 : {
    type : DataTypes.INTEGER,
 },

 Image5 : {
    type : DataTypes.INTEGER,
    
 },

}


module.exports = ImagesSchema