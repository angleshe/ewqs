const Router = require('koa-router')
const checkToken = require('../middleware/power.js')()
const {isArray} = require('./typeof')
const test = require('../api/test')
const carousel = require('../api/carousel')
const artice = require('../api/artice')
const expert = require('../api/expert')
const register = require('../api/register')
const login = require('../api/login')
const user = require('../api/user')
const topic = require('../api/topic')

let router = new Router()
function bindRouter (path, fn, act = 'get', power = false) {
  let _rou = new Router()
  if (isArray(fn)) {
    power ? _rou[act](path, checkToken, ...fn) : _rou[act](path, ...fn)
  } else {
    power ? _rou[act](path, checkToken, fn) : _rou[act](path, fn)
  }
  router.use('/api', _rou.routes(), _rou.allowedMethods())
}
bindRouter('/carousel', carousel.getCar)
bindRouter('/artice', artice.getArtice)
bindRouter('/expert', expert.getExpert)
bindRouter('/register', [register.paramTest, register.postRegister], 'post')
bindRouter('/login', [login.paramTest, login.postLogin], 'post')
bindRouter('/user', user.userInfo, 'post', true)
bindRouter('/topic', topic.getTopic)
bindRouter('/test', test)

module.exports = router
