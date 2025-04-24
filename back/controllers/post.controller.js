const Post = require('../models/Post.model');

module.exports.postController = {
    createPost: async (req, res) => {
        const { title, text, userId } = req.body;
        const image = req.file?.filename; // multer сохраняет имя файла
      
        if (!title || !text) {
          return res.status(400).json({ error: 'Не заполнены обязательные поля' });
        }
      
        try {
          const post = new Post({
            title,
            text,
            author: userId,
            date: new Date(),
            image: image ? `/uploads/${image}` : null, // сохраняем путь
          });
      
          await post.save();
          res.status(201).json(post);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      },

    getPost: async (req, res) => {
        try {
            const posts = await Post.find().populate('author');
            res.json(posts);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при получении постов', details: err.message });
        }
    },

    getPostById: async (req, res) => {
        const { id } = req.params;
        try {
            const post = await Post.findById(id)
                .populate('author')
                .populate({
                    path: 'comments',
                    populate: { path: 'user' },
                })
                .populate('likes');
            if (!post) {
                return res.status(404).json({ message: 'Пост не найден' });
            }
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при получении поста', details: err.message });
        }
    },

    deletePost: async (req, res) => {
        const { id } = req.params;
        const userId = req.user.userId; // ID пользователя из токена
        const userRole = req.user.role; // Роль пользователя из токена

        try {
            const post = await Post.findById(id);
            if (!post) {
                return res.status(404).json({ message: 'Такого поста нет' });
            }

            // Проверяем, является ли пользователь автором поста или администратором
            if (post.author.toString() !== userId && userRole !== 'admin') {
                return res.status(403).json({ error: 'У вас нет прав на удаление этого поста' });
            }

            await Post.findByIdAndDelete(id);
            res.json(`Вы удалили пост ${id}`);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при удалении поста', details: err.message });
        }
    },
};

