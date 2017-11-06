import Vue from 'vue'
const _validator = {
  phone: {rule: val => /^1[345789]\d{9}$/.test(val), name: '手机'},
  code: {rule: val => /^\d{4}$/.test(val), name: '验证码'},
  name: {rule: val => (val.length > 1) && (val.length < 10), name: '用户名', text: '用户名不得小于2位，超过10位'}
}

function validator () {
  return new Proxy({}, {
    _validator,
    set (target, key, value, proxy) {
      let va = this._validator[key]
      if (value === '') {
        Vue.$vux.toast.text(`${va.name}不能为空！`, 'bottom')
        target[key] = false
        return false
      }
      if (va.rule(value)) {
        return Reflect.set(target, key, value, proxy)
      } else {
        Vue.$vux.toast.text(va.text || `${va.name}格式错误！`, 'bottom')
        target[key] = false
        return false
      }
    }
  })
}

export default validator()
