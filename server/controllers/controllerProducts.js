<<<<<<< HEAD
const db = require("../database/index");
const Product = db.models.Products;

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
    const productName = req.params.idProduct;
    console.log(productName);
    Product.findOne({ where: { idProduct: productName } })
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

module.exports = { getAll, getOne, getClothes, postProduct };
=======

const { error } = require("jquery");
const db = require("../database/index");
const usermodel=require("../models/Products")
const Product=db.models.Users


const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports={getAllProducts,getProductById,createProduct}


>>>>>>> fdd8b610727c3ce47345d751fa596c22b661e544
