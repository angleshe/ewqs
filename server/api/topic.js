const mysql = require('../module/mysqldb')
const {isExit} = require('../module/typeof')
const topic = {
  getTopic: async ctx => {
    let res
    if (isExit(ctx.request.query.module)) {
      switch (ctx.request.query.module) {
        case 'hot' :
          res = await mysql.query('select id,title,info,commentCount,mainPic from artice where type like "%,6,%" order by commentCount desc limit 0,8')
          break
        default :
          ctx.$error = '参数错误！'
          return
      }
    } else {
      res = await mysql.query('select id,title,info,commentCount,mainPic from artice where type like "%,6,%"')
    }
    ctx.body = res
  }
}
module.exports = topic
