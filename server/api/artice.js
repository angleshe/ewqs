const mysql = require('../module/mysqldb')
const {isExit} = require('../module/typeof')
const artice = {
  getArtice: async ctx => {
    let param = ctx.request.query
    if (!(isExit(param.star) && isExit(param.count))) ctx.throw('缺少参数！', 404)
    let sql = 'select title,info,mainPic,commentCount,type from artice where type not like "%,6,%" limit ?,?'
    let res = await mysql.query(sql, [parseInt(param.star), parseInt(param.count)])
    for (let i = 0; i < res.length; i++) {
      let type = res[i].type
      let _res = await mysql.query(`select name from articetype where id in (${type.substring(1, type.length - 1)})`)
      let arr = new Array()
      for (let n = 0; n < _res.length; n++) arr.push(_res[n].name)
      res[i].type = arr.join(' ')
    }
    ctx.body = res
  }
}
module.exports = artice
