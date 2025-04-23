const Router = require('express')
const {postController} = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authAdmin');
const authUser= require('../middlewares/authUser')

const router = Router()

router.post('/post',authUser, postController.createPost);
router.get('/post',postController.getPost)
router.get('/post/:id',postController.getPostById)
router.delete('/post/:id',authUser,postController.deletePost)


module.exports = router
