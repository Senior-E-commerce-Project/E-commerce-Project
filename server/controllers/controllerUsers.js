const { error } = require("jquery");
const db = require("../database/index");
const usermodel=require("../models/Users")
const User=db.models.Users



/////get all users/////
const getAll = function (req, res) {
const user=  User.findAll({}).then((result)=>{
  res.send(result)
})
.catch((error)=>{
  res.send(error)
})
};


/////add users/////
const Adduser = async function (req, res) {
  try {
    let data = {
      UserName: req.body.UserName,
      UserEmail: req.body.UserEmail,
      UserPassword: req.body.UserPassword,
      UserPhoto: req.body.UserPhoto,
      UserLocation: req.body.UserLocation,
      UserRole: req.body.UserRole,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    };

    const user = await User.create(data);
    res.send(user);
  } catch (error) {
    res.status(500).send(error,console.log("cannot add user"));
  }
};

/////delete user/////

const deleteUser = async function (req, res) {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    await user.destroy();
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
};

/////update user/////

const updateUser = async function (req, res) {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    const updatedData = {
      UserName: req.body.UserName,
      UserEmail: req.body.UserEmail,
      UserPassword: req.body.UserPassword,
      UserPhoto: req.body.UserPhoto,
      UserLocation: req.body.UserLocation,
      UserRole: req.body.UserRole,
      updatedAt: new Date()
    };

    await user.update(updatedData);
    res.send('User updated successfully');
  } catch (error) {
    res.status(500).send(error);
  }
}

/////get user by role/////
const getUsersByRole = async function (req, res) {
  try {
    const userRole = req.params.userRole;
    const users = await User.findAll({
      where: {
        UserRole: userRole
      }
    })
res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};


/////get all sellers/////
const getAllSellers = async function (req, res) {
  try {
    const sellers = await User.findAll({
      where: {
        UserRole: 'seller'
      }
    })
     res.send(sellers);
  } catch (error) {
    res.status(500).send(error);
  }
};

/////get all buyers/////
const getAllBuyers = async function (req, res) {
  try {
    const buyers = await User.findAll({
      where: {
        UserRole: 'buyer'
      }
    });

  res.send(buyers);
  } catch (error) {
    res.status(500).send(error);
  }
};

/////get user by id/////
const getUserById = async function (req, res) {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};




module.exports = {
  getAll,getUserById,Adduser,getAllSellers,getUsersByRole,deleteUser,updateUser,getAllBuyers
}
// const { error } = require("jquery");
// // const { DataTypes, Sequelize } = require('sequelize');
// const connection = require("../database/index");
// const {getAllUsers,getOne,remove,updat,add,getSellers,getBuyers} = require("../database/index");


// // function to get all users
// const getAllUser = (req, res) => {
//   getAllUsers((err, results) => {
//     if (err) {
//         res.status(500).json({ error: 'Unable to get All Users' });
//     } else {
//         res.status(200).json(results);
//     }
// });
// };

// // //  function to get one user by ID
// const getOneUser = (req, res) => {
//   const idUser = req.params.idUser; 
//   getOne(idUser, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to get One User ' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// // //  function to remove a user by UserName
// const removeUser = (req, res) => {
//   const UserName = req.params.UserName; // Assuming the username is in the request parameters
//   remove(UserName, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to remove User' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// // //  function to update a user by ID
// const updateUser = (req, res) => {
//   const idUser = req.params.idUser;
//   const updatedValue = req.body.value; 
//   updat(idUser, updatedValue, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to update user' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// // //  function to add a new user
// const addUser = (req, res) => {
//   const newUser = req.body; 
//   add(newUser, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to add user' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// // //  function to get all sellers
// const getAllSellers = (req, res) => {
//   getSellers((err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to get all sellers' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// // //  function to get all buyers
// const getAllBuyers = (req, res) => {
//   getBuyers((err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Unable to get All buyers' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };

// module.exports = {
//   getAllUser,
//   getOneUser,
//   removeUser,
//   updateUser,
//   addUser,
//   getAllSellers,
//   getAllBuyers
// };



