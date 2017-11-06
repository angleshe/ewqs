const jwt = require('jsonwebtoken')
const token = {
  create: id => jwt.sign({id}, 'sinner77', {expiresIn: '7d'})
}
module.exports = token
