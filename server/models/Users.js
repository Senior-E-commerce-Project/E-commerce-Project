const database = require('../database/index.js');
const { DataTypes} = require('sequelize');


const UserSchema = {

  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

  UserName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  UserEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },

  UserPassword: {
    type: DataTypes.STRING,
    allowNull: false
  },

  UserPhoto: {
    type: DataTypes.STRING,
  },

  UserLocation: {
    type: DataTypes.STRING,
  },

  UserRole: {
    type: DataTypes.ENUM(['admin', 'seller', 'buyer'])
  },
};

// const Users = database.define('Users', UserSchema);




 


module.exports = UserSchema;
