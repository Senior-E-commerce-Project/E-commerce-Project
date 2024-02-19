const router = require("express").Router();
const controllerUsers = require ('../controllers/controllerUsers')

<<<<<<< HEAD
//  router.get("/getAll",controllerUsers.getAll);
//  router.post("/post",controllerUsers.Adduser)
=======

 router.post("/post",controllerUsers.Adduser)
 router.get("/getAll",controllerUsers.getAll);
router.get("/getOneUser/:idUser",controllerUsers.getUserById)
router.delete('/delete/:UserName',controllerUsers.deleteUser)
router.put('/users/:idUser',controllerUsers.updateUser)
router.get('/sellers',controllerUsers.getAllSellers)
router.get('/buyers',controllerUsers.getAllBuyers)
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22




module.exports = router;