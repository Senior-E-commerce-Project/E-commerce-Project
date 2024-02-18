const { error } = require("jquery");
const db = require("../database/index");
const imgmod=require("../models/Images")


const Image=db.models.Images

const getAll = function (req, res) {

    const imgs=Image.findAll({}).then((result)=>{
      res.send(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    
    
    };
const addimage=function(req,res){
  const data={
    Image1:req.body.Image1,
    Image2:req.body.Image2,
    Image3:req.body.Image3,
   
  }
 Image.create(data).then((result)=>{
    res.send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
}


    module.exports={
        getAll,addimage
    }