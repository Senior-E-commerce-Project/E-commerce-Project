const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')

<<<<<<< HEAD
router.get("/getAll",controllerProducts.getAll)
router.get("/getone/:idProduct",controllerProducts.getOne)
router.get("/getAll/:Clothes",controllerProducts.getClothes)
router.post("/post",controllerProducts.postProduct)


=======
>>>>>>> fdd8b610727c3ce47345d751fa596c22b661e544
module.exports = router;
