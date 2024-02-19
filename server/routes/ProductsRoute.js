const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')

router.get("/getAll",controllerProducts.gettAll);
router.post("/post",controllerProducts.addProduct);
router.delete("/delete/:idProduct",controllerProducts.deleted);
router.get("/getOne/:ProductName",controllerProducts.gettOne);
module.exports = router;
