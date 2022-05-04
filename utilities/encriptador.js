const bcrypt = require('bcrypt');
const auth  = require('../config/auth')
const Boom = require('@hapi/boom')


exports.verifyPassword = async (myPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(myPassword, hashedPassword);
  if (!isMatch) throw Boom.unauthorized('Incorrect username or password.')
  return isMatch
}

exports.hashPassword = async (myPassword) => {
  const hashedPassword = await bcrypt.hash(myPassword, auth.saltRounds);
  return hashedPassword;
}
