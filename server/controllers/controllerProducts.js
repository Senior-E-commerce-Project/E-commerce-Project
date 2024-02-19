const db=require("../database/index")
const Product=db.models.Products

const gettAll= async (req,res)=>{
    try{
        let result=await Product.findAll({})
        res.json(result)
    }
    catch(err){
        console.log(err);
    }
}
const addProduct= async (req,res)=>{
    const newProduct = {
  ProductName: req.body.ProductName,
   ProductDescription: req.body.ProductDescription,
  ProductPrice:req.body.ProductPrice,
   ProductAvailability:req.body.ProductAvailability,
   ProductCategory:req.body.ProductCategory,
   ProductImage1:req.body.ProductImage1
    }
    try{
        let result=await Product.create(newProduct)
        res.json(result)
    }
    catch(err){
        console.log(err);
    }
}
const gettOne= async (req,res)=>{
    const ProductName = req.params.ProductName; 
    try{
        let result=await Product.findOne({where:{ProductName:ProductName}})
        res.json(result)
    }
    catch(err){
        console.log(err);
    }
}
const deleted= async (req,res)=>{
    const idProduct = req.params.idProduct; 
    try{
        let result=Product.destroy({where:{idProduct:idProduct}})
        res.json(result)
    }
    catch(err){
        console.log(err);
    }
}

module.exports={gettOne,gettAll,addProduct,deleted}