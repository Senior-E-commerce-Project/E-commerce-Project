const  {favorite}=require("../database/index")





const getAll = function (req, res) {
  const user=  favorite.findAll({}).then((result)=>{
    res.status(201).send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }

const getAllByUserId= function (req, res) {
  const cart=  favorite.findAll({where:{UserIdUser:req.params.id},include:{model:product}}).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }
const add = function (req, res) {
  const user=  favorite.create(req.body).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }

const del = function (req, res) {
  const user=  favorite.destroy({where:{userId:req.params.id}}).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }






  module.exports={getAll,add ,del,getAllByUserId}