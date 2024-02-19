const router = require("express").Router();
const  controllerCarts = require ('../controllers/controllerCarts')

<<<<<<< HEAD
router.get("/getAll",controllerCarts.getAll);
router.post("/post",controllerCarts.add);
router.post("/post1",controllerCarts.add);
router.delete("/delete/:id",controllerCarts.del);
router.get("/getoneu/:id",controllerCarts.getAllByUserId);
router.get("/getonec/:id",controllerCarts.getAllBycart);


=======
// router.get("/getAll",controllerCarts.getAll)
// router.post("/add",controllerCarts.postcarts)
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22

module.exports = router;
