// controllers/like.controller.js
const Like = require('../models/Like.model');
const Post = require('../models/Post.model');

module.exports.likesController = {
  
    toggleLike: async (req, res) => {
        try {
          const { postId } = req.params;
          const {userId} = req.body;
      
          const post = await Post.findById(postId);
          if (!post) {
            return res.status(404).json({ message: 'Пост не найден' });
          }
      
          const existingLike = await Like.findOne({ post: postId, user: userId });
      
          if (existingLike) {
            await Like.findByIdAndDelete(existingLike._id);
            const updatedPost = await Post.findByIdAndUpdate(
              postId, 
              { $pull: { likes: existingLike._id } },
              { new: true } // чтобы вернуть обновлённый документ
            );
            if (!updatedPost) {
              return res.status(500).json({ message: 'Не удалось обновить пост' });
            }
            return res.json({ 
              liked: false, 
              likesCount: updatedPost.likes.length 
            });
          } else {
            const newLike = await Like.create({ post: postId, user: userId });
            const updatedPost = await Post.findByIdAndUpdate(
              postId, 
              { $push: { likes: newLike._id } },
              { new: true } // чтобы вернуть обновлённый документ
            );
            return res.json({ 
              liked: true, 
              likesCount: updatedPost.likes.length 
            });
          }
        } catch (error) {
          console.error('Ошибка при обработке лайка:', error);
          res.status(500).json({ message: 'Ошибка сервера' });
        }
      },

  getPostLikes: async (req, res) => {
    try {
      const likes = await Like.find({ post: req.params.postId })
        .populate('user', 'name avatar');
      res.json(likes);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  }
};