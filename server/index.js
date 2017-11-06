const Koa = require('koa')
const router = require('./module/router')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const jsonOutput = require('./middleware/json-output')
const logger = require('./module/logger')

const app = new Koa()

// 加载参数解析模块
app.use(bodyParser())
// 加载静态资源
app.use(static (path.join(__dirname, './static')))
// 加载json模板
app.use(jsonOutput())
// 加载路由模块
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

app.on('error', function (err, ctx) {
  logger.error('server error', err, ctx)
  ctx.body = {
    state: false,
    msg: '系统错误！'
  }
  ctx.status = 200
})

logger.info('ewqs server start-quick is starting at port 3000')
