const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.userController = {
    // Регистрация пользователя
    createUser: async (req, res) => {
        const { name, lastName, email, password, role } = req.body;

        try {
            // Проверяем, существует ли пользователь с таким email
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
            }

            // Создаем нового пользователя
            const user = new User({ name, lastName, email, password, role });
            await user.save();

            // Генерируем токен
            const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key', { expiresIn: '1h' });

            res.status(201).json({ user, token });
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при создании пользователя', details: err.message });
        }
    },

    // Вход пользователя
    loginUser: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Ищем пользователя по email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'Неверный email или пароль' });
            }

            // Проверяем пароль
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Неверный email или пароль' });
            }

            // Генерируем токен
            const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key', { expiresIn: '1h' });

            res.json({ user, token });
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при входе', details: err.message });
        }
    },

    // Получение всех пользователей
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при получении пользователей', details: err.message });
        }
    },

    // Получение пользователя по ID
    getUserById: async (req, res) => {
        const { id } = req.params;

        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при получении пользователя', details: err.message });
        }
    },

    // Обновление пользователя
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { name, lastName, email, role } = req.body;

        try {
            const user = await User.findByIdAndUpdate(
                id,
                { name, lastName, email, role },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при обновлении пользователя', details: err.message });
        }
    },
};
