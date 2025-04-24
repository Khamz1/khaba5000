const Router = require('express')
const {likesController} = require('../controllers/like.controller');


const router = Router()

router.post('/api/likes/:postId', likesController.toggleLike);
router.get('/api/likes/:postId', likesController.getPostLikes);



module.exports = router
