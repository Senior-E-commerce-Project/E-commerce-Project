const router = require("express").Router();
const  controllerProducts = require ('../controllers/controllerProducts')

router.get("/getAll",controllerProducts.gettAll);
router.post("/post",controllerProducts.created);
module.exports = router;
