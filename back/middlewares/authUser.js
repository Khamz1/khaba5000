const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Токен отсутствует. Авторизация требуется.' });
    }

    try {
        const decoded = jwt.verify(token, 'secret-key'); // Замените на ваш секретный ключ
        req.user = decoded; // Добавляем данные пользователя в объект запроса
        next(); // Передаем управление следующему middleware или контроллеру
    } catch (err) {
        res.status(401).json({ error: 'Неверный токен. Авторизация требуется.' });
    }
};

module.exports = authUser;
