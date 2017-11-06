const mysql = require('../module/mysqldb')
const user = {
  userInfo: async ctx => {
    let sql = 'select faceUrl,name,info,integral from user where token = ?'
    ctx.body = (await mysql.query(sql, [ctx.$token]))[0]
  }
}
module.exports = user
