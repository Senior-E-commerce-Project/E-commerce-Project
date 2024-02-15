const router = require("express").Router();
const controllerUsers = require ('../controllers/controllerUsers')


 router.get("/getAll",controllerUsers.getAll);
 router.post("/post",controllerUsers.Adduser)
router.get("/getOneUser/:idUser",controllerUsers.getUserById)
router.delete('/users/:UserName',controllerUsers.deleteUser)
router.put('/users/:idUser',controllerUsers.updateUser)
router.get('/sellers',controllerUsers.getAllSellers)
router.get('/buyers',controllerUsers.getAllBuyers)

module.exports = router;