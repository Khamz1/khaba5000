const Router = require('express')
const {userController} = require('../controllers/user.controller');
const authUser= require('../middlewares/authUser')

const router = Router()

router.post('/signUp', userController.createUser);
router.post('/user/login',userController.loginUser)
router.get('/user',userController.getUsers)
router.get('/user/:id',userController.getUserById)
router.patch('/user/:id',userController.updateUser)
router.get('/me', authUser, userController.getMe);


module.exports = router


