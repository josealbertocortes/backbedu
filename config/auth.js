const secret = require('./secret');
const { expressjwt } = require('express-jwt');

//Bearer <JWT>
function getTokenFromHeader(req,res) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    console.log("No tienes JWT");
    return null;
}

const auth = {
    required: expressjwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'user',
        getToken: getTokenFromHeader
    }),
    optional: expressjwt({
        secret: secret,
        algorithms: ['HS256'],
        userProperty: 'user',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
}

module.exports = auth;
