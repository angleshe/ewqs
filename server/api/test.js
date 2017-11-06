const logger = require('../module/logger')
module.exports = async ctx => {
  ctx.body = ctx
  logger.info('asd')
}
