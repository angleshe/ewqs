const {validator} = require('../module/verification')
const {isExit} = require('../module/typeof')
const mysql = require('../module/mysqldb')
const logger = require('../module/logger')
const register = {
  postRegister: async ctx => {
    let param = ctx.request.body
    let sql = 'insert into user (name,phone) values(?,?)'
    try {
      ctx.body = (await mysql.query(sql, [param.name, param.phone])).affectedRows === 1
    } catch (e) {
      if (e.sqlState === '23000') {
        ctx.body = false
      } else {
        logger.error('DataBase error', `sql:${sql}`)
        throw new Error(e)
      }
    }
  },
  paramTest: async (ctx, next) => {
    let param = ctx.request.body
    if (!(isExit(param.name) && isExit(param.phone) && isExit(param.code))) ctx.throw('缺少参数', 404)
    let verification = validator(text => {
      ctx.$error = text
    })
    let val = (function * () {
      yield verification.name = param.name
      yield verification.phone = param.phone
      yield verification.code = param.code
    })()
    val.next()
    !verification.name || val.next()
    !verification.phone || val.next()
    !verification.code || await next()
  }
}
module.exports = register
