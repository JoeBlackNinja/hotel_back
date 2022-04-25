const jwt = require('jsonwebtoken');

const token = () => {
    let token_ = jwt.sign('asd', 'ert', {
        expiresIn : 10000
    })
    return token_;
} 

module.exports = token;