const Router = require('express')
const {userController} = require('../controllers/user.controller');

const router = Router()

router.post('/signUp', userController.createUser);
router.post('/user/login',userController.loginUser)
router.get('/user',userController.getUsers)
router.get('/user/:id',userController.getUserById)
router.patch('/user/:id',userController.updateUser)


module.exports = router


