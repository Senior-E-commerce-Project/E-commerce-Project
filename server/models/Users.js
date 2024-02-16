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



// Sequelize equivalent for getAll function
// const getAllUsers = function (callback) {
//   user.findAll()
//     .then((results) => callback(null, results))
//     .catch((err) => callback(err));
// };

// Sequelize equivalent for getOne function
// const getOne = function (idUser, callback) {
//   user.findByPk(idUser)
//     .then((results) => callback(null, results))
//     .catch((err) => callback(err));
// };

// // Sequelize equivalent for remove function
// const remove = function (name, callback) {
//   user.destroy({
//     where: {
//       name: name
//     }
//   })
//     .then((results) => callback(null, results))
//     .catch((err) => callback(err));
// };

// // Sequelize equivalent for update function
// const update = function (id, value, callback) {
//   user.update(
//     { value: value },
//     {
//       where: {
//         idestate: id
//       }
//     }
//   )
//     .then((results) => callback(null, results))
//     .catch((err) => callback(err));
// };

// // Sequelize equivalent for add function
// const add = function (val, callback) {
//   user.create(val)
//     .then((results) => callback(null, results))
//     .catch((err) => callback(err));
// };





 


module.exports = UserSchema;
