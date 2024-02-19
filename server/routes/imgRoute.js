const router = require("express").Router();
const controllerimg=require("../controllers/controllerimg")

router.get("/getAll",controllerimg.getAll)
router.post("/post",controllerimg.addimage)




module.exports = router;