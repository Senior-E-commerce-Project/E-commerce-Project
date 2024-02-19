const router = require("express").Router();
const  controllerCarts = require ('../controllers/controllerCarts')

router.get("/getAll",controllerCarts.getAll);
router.post("/post",controllerCarts.add);
router.post("/post1",controllerCarts.add);
router.delete("/delete/:id",controllerCarts.del);
router.get("/getoneu/:id",controllerCarts.getAllByUserId);
router.get("/getonec/:id",controllerCarts.getAllBycart);



module.exports = router;
