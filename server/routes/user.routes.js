const router = require("express").Router();
const usercontroller = require("../controllers/user.controllers");

router.post('/add-user' , usercontroller.addUser);
router.get('/show-user/:id',usercontroller.showUser);
router.get('/all-users',usercontroller.allUsers);
router.update('/update-user/:id',usercontroller.updateUsers);
router.delete('/delete-user/:id', usercontroller.removeUser);

module.exports = router;