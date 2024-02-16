const db=require("../database/index")
const Product=db.models.Products


const gettAll= function(req,res){
    Product.findAll({}).then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const created= function(req,res){
    const data={
        ProductName: req.body.ProductName,
        ProductDescription: req.body.ProductDescription,
        ProductPrice:req.body.ProductPrice,
        ProductAvailability:req.body.ProductAvailability,
        ProductCategory:req.body.ProductCategory,
        ProductAverageRating:req.body.ProductAverageRating
    }
    Product.create(data).then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports={gettAll,created}