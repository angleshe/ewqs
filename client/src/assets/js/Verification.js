/*
字符串格式验证
 */

import Vue from 'vue'
/**
 * 验证类
 * 由单一验证类组成，单一验证类包括验证规则（rule），验证字段名（name），[错误信息（text）]
 * @class
 */
const _validator = {
  phone: {rule: val => /^1[345789]\d{9}$/.test(val), name: '手机'},
  code: {rule: val => /^\d{4}$/.test(val), name: '验证码'},
  name: {rule: val => (val.length > 1) && (val.length < 10), name: '用户名', text: '用户名不得小于2位，超过10位'}
}

/**
 * 处理器
 * 设置代理规则
 * @class
 */
var handler = {
  // 拦截写入操作
  set: function (target, key, value) {
    if (key in _validator) {
      // 去除写入字符串的前后空格
      let val = ''.trim.apply(value)
      let va = _validator[key]
      // 过滤写入空字符串
      if (val === '') {
        Vue.$vux.toast.text(`${va.name}不能为空！`, 'bottom')
        target[key] = false
        return false
      }
      // 验证写入字符串是否符合规则
      if (va.rule(val)) {
        target[key] = val
        return true
      } else {
        Vue.$vux.toast.text(va.text || `${va.name}格式错误！`, 'bottom')
        target[key] = false
        return false
      }
    } else {
      throw new Error(`验证类中缺少${key}的验证对象！`)
    }
  }
}

// 返回代理对象
export default new Proxy({}, handler)
