const _validator = {
  phone: {rule: val => /^1[345789]\d{9}$/.test(val), name: '手机'},
  code: {rule: val => /^\d{4}$/.test(val), name: '验证码'},
  name: {rule: val => (val.length > 1) && (val.length < 10), name: '用户名', text: '用户名不得小于2位，超过10位'}
}
function validator (fn) {
  return new Proxy({}, {
    set (target, key, value, proxy) {
      if (key in _validator) {
        let va = _validator[key]
        let val = ''.trim.apply(value)
        if (val === '') {
          fn(`${va.name}不能为空！`, 'bottom')
          target[key] = false
          return false
        }
        if (va.rule(val)) {
          return Reflect.set(target, key, value, proxy)
        } else {
          fn(va.text || `${va.name}格式错误！`, 'bottom')
          target[key] = false
          return false
        }
      } else {
        throw new Error(`验证类中缺少${key}的验证对象！`)
      }
    }
  })
}
module.exports = {validator}
