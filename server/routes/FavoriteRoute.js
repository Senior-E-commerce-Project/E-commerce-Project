const router = require("express").Router();
const  controllerFavorite = require ('../controllers/controllerFavorite')

router.get("/getAll",controllerFavorite.getAll);
router.post("/post",controllerFavorite.add);
router.delete("/delete/:id",controllerFavorite.del);
router.get("/getoneu/:id",controllerFavorite.getAllByUserId)


module.exports = router;
