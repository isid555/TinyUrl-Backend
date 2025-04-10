const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, 'sid_url_short_project_201');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};