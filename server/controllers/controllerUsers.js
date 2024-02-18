const { error } = require("jquery");
const db = require("../database/index");
const User = db.models.Users






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

// /////delete user/////

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

// /////update user/////

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

///get user by role/////
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



///get all sellers/////
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

const userAz=  User.findAll({}).then((result)=>{
  res.send(result)
})
.catch((error)=>{
  res.send(error)
})
  

};
const adduser=function(req,res){
let data={
  UserName:req.body.UserName,
  UserEmail:req.body.UserEmail,
  UserPassword:req.body.UserPassword,
  UserPhoto:req.body.UserPhoto,
  UserLocation:req.body.UserLocation,
  UserRole:req.body.UserRole,
  createdAt:req.body.createdAt,
  updatedAt:req.body.updatedAt

}
const user=  User.create(data).then((result)=>{
  res.send(result)
})
.catch((error)=>{
  res.send(error)
})
}


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

///get user by id/////
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
  getAll,getUserById,Adduser,getAllSellers,getUsersByRole,deleteUser,updateUser,getAllBuyers,Adduser
}