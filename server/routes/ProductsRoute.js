const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')


router.get("/getAll",controllerProducts.getAll)
router.get("/getone/:idProduct",controllerProducts.getOne)
router.get("/getAll/:Clothes",controllerProducts.getClothes)
router.post("/post",controllerProducts.postProduct)



module.exports = router;
