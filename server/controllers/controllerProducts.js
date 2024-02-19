const db = require("../database/index");
const Product = db.models.Products;

<<<<<<< HEAD
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
=======
const getAll = function (req, res) {
    Product.findAll({})
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getOne = function (req, res) {
    const productName = req.params.ProductName ;
    console.log(productName);
    Product.findOne({ where: { ProductName: productName } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};

const getClothes = function (req, res) {
    Product.findAll({ where: { ProductCategory: 'Clothes' } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};
const getElectronics = function (req, res) {
    Product.findAll({ where: { ProductCategory: 'Electronics' } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};
const getfurniture = function (req, res) {
    Product.findAll({ where: { ProductCategory: 'Furniture' } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};
const getcosmetics = function (req, res) {
    Product.findAll({ where: { ProductCategory: 'Cosmetics' } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};

const postProduct = function (req, res) {
    const data = {
        ProductName: req.body.ProductName,
        ProductDescription: req.body.ProductDescription,
        ProductPrice: req.body.ProductPrice,
        ProductAvailability: req.body.ProductAvailability,
        ProductCategory: req.body.ProductCategory,
        ProductAverageRating: req.body.ProductAverageRating,
    };
    console.log(data);
    Product.create(data)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
};

module.exports = { getAll, getOne, getClothes, postProduct,getElectronics,getfurniture ,getcosmetics};
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22
