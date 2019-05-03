const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
                
        // dont use jwt.decode(), verify() will verify and return decoded value
        const decoded = jwt.verify(token, config.secret);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};