const authMiddleware = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'У вас нет доступа' });
        }
        next();
    };
};

module.exports = authMiddleware;
