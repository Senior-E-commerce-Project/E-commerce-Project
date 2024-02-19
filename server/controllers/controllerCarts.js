<<<<<<< HEAD
const db=require("../database/index")
const  Cart=db.models.Carts
const product=db.models.Products







const getAll = function (req, res) {
    Cart.findAll({}).then((result)=>{
    res.status(201).send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }
  const getAllByUserId= function (req, res) {
    const cart=  Cart.findAll({where:{UserIdUser:req.params.id},include:{model:product}}).then((result)=>{
      res.json(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
    const getAllBycart= function (req, res) {
        const cart=  Cart.findOne({where:{CartID:req.params.id}}).then((result)=>{
          res.json(result)
        })
        .catch((error)=>{
          res.send(error)
        })
        }

const add = function (req, res) {
  const cart=  Cart.create(req.body).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }

const del = function (req, res) {
  const cart=  Cart.destroy({where:{UserIdUser:req.params.id}}).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }

  module.exports={getAll, getAllByUserId,add ,del,getAllBycart}
=======
const { error } = require("jquery");
const db = require("../database/index");
// const cartmodel=require("../models/Carts")
// const cart=db.models.Carts


// const getAll = function (req, res) {

//     const carts=cart.findAll({}).then((result)=>{
//       res.send(result)
//     })
//     .catch((error)=>{
//       res.send(error)
//     })
    
    
//     };
//     const postcarts=function(req,res){
// const data={
//     CartQuantity:req.body. CartQuantity
// }
//         const carts=cart.create(data).then((result)=>{
//             res.send(result)
//         })
//         .catch((error)=>{
//             res.send(error)
//           })
//     }



//     module.exports = {
//         getAll,postcarts
//       }
      
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22
