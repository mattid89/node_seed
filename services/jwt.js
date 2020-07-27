var jwt = require('jsonwebtoken');
var { config } = require('../configs/config'),

signIn = function(usuario) {
    return jwt.sign({
        usuario: usuario
    }, 
    config.jwt.llave, 
    { 
        expiresIn: '24h'
    });
}


verifyToken = function (req, res, next) {
    if (!req.token) {
        res.err = 'token is missing';
        return res.err;
    } else {
        return jwt.verify(req.token, config.jwt.llave, function (err, decoded) {
            if (err) {
                res.err = err.message;
                return res.err;
            }
            else
                return decoded;
        });
    }
}

module.exports = {
    signIn: signIn,
    verifyToken: verifyToken
}