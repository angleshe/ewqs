const jwt = require('jsonwebtoken')
module.exports = function () {
  return async function (ctx, next) {
    if (ctx.request.header['authorization']) {
      let token = ctx.request.header['authorization'].split(' ')[1]
      let decoded = jwt.decode(token, 'sinner77')
      if (token && decoded.exp <= new Date() / 1000) {
        ctx.$error = '登录超时，请重新登录！'
        ctx.$errorCode = 1
      } else {
        ctx.$token = token
        await next()
      }
    } else {
      ctx.throw('缺少参数！', 404)
    }
  }
}
