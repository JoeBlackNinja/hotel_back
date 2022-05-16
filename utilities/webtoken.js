const jwt = require('jsonwebtoken');

const token = (userData) => {
    return jwt.sign({userData}, 'Improving', {
        expiresIn : 10000
    })
} 

module.exports = token;