const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')

<<<<<<< HEAD
router.get("/getAll",controllerProducts.gettAll);
router.post("/post",controllerProducts.addProduct);
router.delete("/delete/:idProduct",controllerProducts.deleted);
router.get("/getOne/:ProductName",controllerProducts.gettOne);
=======

router.get("/getAll",controllerProducts.getAll)
router.get("/getone/:ProductName",controllerProducts.getOne)
router.get("/getAll/Electronics",controllerProducts.getElectronics)
router.get("/getAll/Furniture",controllerProducts.getfurniture)
router.get("/getAll/Clothes",controllerProducts.getClothes)
router.get("/getAll/cosmetics",controllerProducts.getcosmetics)
router.post("/post",controllerProducts.postProduct)



>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22
module.exports = router;
