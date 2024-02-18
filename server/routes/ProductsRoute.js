const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')


router.get("/getAll",controllerProducts.getAll)
// router.get("/getone/:ProductName",controllerProducts.getOne)
// router.get("/getAll/Electronics",controllerProducts.getElectronics)
// router.get("/getAll/Furniture",controllerProducts.getfurniture)
// router.get("/getAll/Clothes",controllerProducts.getClothes)
// router.get("/getAll/cosmetics",controllerProducts.getcosmetics)
// router.post("/post",controllerProducts.postProduct)



module.exports = router;