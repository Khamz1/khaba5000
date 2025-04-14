const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Токен отсутствует. Авторизация требуется.' });
    }

    try {
        const decoded = jwt.verify(token, 'secret-key'); 
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Неверный токен. Авторизация требуется.' });
    }
};

module.exports = authUser;
