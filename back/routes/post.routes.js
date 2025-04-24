const Router = require('express')
const {postController} = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authAdmin');
const authUser= require('../middlewares/authUser')
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, Date.now() + ext);
    }
  });
  const upload = multer({ storage });
const router = Router()

router.post('/post',authUser, upload.single('image'), postController.createPost);
router.get('/post',postController.getPost)
router.get('/post/:id',postController.getPostById)
router.delete('/post/:id',authUser,postController.deletePost)


module.exports = router
