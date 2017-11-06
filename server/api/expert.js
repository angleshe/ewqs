const mysql = require('../module/mysqldb')
const expert = {
  getExpert: async ctx => {
    let sql = 'select id,name,address,info,faceUrl,price from user where expert=1'
    ctx.body = await mysql.query(sql)
  }
}
module.exports = expert
