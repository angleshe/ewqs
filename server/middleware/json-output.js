const logger = require('../module/logger')
const {isExit} = require('../module/typeof')
module.exports = function () {
  return async function (ctx, next) {
    await next()
    if (isExit(ctx.body) || ctx.$error) {
      ctx.body = ctx.$error ? {
        state: false,
        msg: ctx.$error,
        errorCode: ctx.$errorCode || 0
      } : {
        state: true,
        msg: ctx.body
      }
    } else {
      logger.warn(`msg:not found page,url:${ctx.request.url},ip:${ctx.request.ip}`)
    }
  }
}
