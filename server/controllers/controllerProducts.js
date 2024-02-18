const db = require("../database/index");
const Product = db.product;

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
