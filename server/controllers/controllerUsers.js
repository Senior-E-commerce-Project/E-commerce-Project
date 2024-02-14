const { error } = require("jquery");
const db = require("../database/index");
const usermodel=require("../models/Users")
const User=db.models.Users
console.log(User);
const getAll = function (req, res) {

const user=  User.findAll({}).then((result)=>{
  res.send(result)
})
.catch((error)=>{
  res.send(error)
})


};
const Adduser=function(req,res){
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


module.exports = {
  getAll,Adduser
}
