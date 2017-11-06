const mysql = require('../module/mysqldb')
const carousel = {
  getCar: async ctx => {
    let sql = 'select id,title,mainPic from artice where isAd=1'
    ctx.body = await mysql.query(sql)
  }
}
module.exports = carousel
