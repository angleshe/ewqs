const {isExit} = require('../module/typeof')
const {validator} = require('../module/verification')
const mysql = require('../module/mysqldb')
const token = require('../module/token')
const login = {
  postLogin: async ctx => {
    let param = ctx.request.body
    let sql = 'select id from user where phone=?'
    let res = await mysql.query(sql, [param.phone])
    if (res.length === 0) {
      ctx.$error = '用户不存在！'
    } else {
      let userId = res[0].id
      let tokenStr = token.create(userId)
      if ((await mysql.query('update user set token=? where id=?', [tokenStr, userId])).affectedRows === 1) {
        ctx.body = tokenStr
      }
    }
  },
  paramTest: async (ctx, next) => {
    let param = ctx.request.body
    if (!(isExit(param.phone) && isExit(param.code))) ctx.throw('缺少参数', 404)
    let verification = validator(text => {
      ctx.$error = text
    })
    let val = (function * () {
      yield verification.phone = param.phone
      yield verification.code = param.code
    })()
    val.next()
    !verification.phone || val.next()
    !verification.code || await next()
  }
}
module.exports = login
