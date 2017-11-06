import axios from 'axios'
import config from './config'
import url from './url'
import stores from 'storejs'
const Vaxios = axios.create(config)
const api = {
  install: Vue => {
    Vaxios.interceptors.request.use(function (req) {
      if (stores.has('Token')) {
        req.headers.Authorization = `token ${stores.get('Token')}`
      }
      return req
    })
    Vaxios.interceptors.response.use(res => {
      let data = res.data
      if (data.state) {
        res.data = data.msg
      } else {
        Vue.$vux.toast.text(data.msg, 'bottom')
        stores.set('Token', '')
        if (data.errorCode === 1) {
          Vue.$router.push('register')
        }
        res.data = ''
      }
      return res
    })
  },
  all: iterable => Vaxios.all(iterable),
  spread: callback => Vaxios.spread(callback),
  test: () => Vaxios.get(url.test),
  getCar: () => Vaxios.get(url.carousel),
  getArtice: (star, count) => Vaxios.get(`${url.artice}?star=${star}&&count=${count}`),
  getTopic: (module = null) => Vaxios.get(module ? `${url.topic}?module=${module}` : url.topic),
  getExpert: () => Vaxios.get(url.expert),
  register: (name, phone, code) => Vaxios.post(url.register, {name, phone, code}),
  login: (phone, code) => Vaxios.post(url.login, {phone, code}),
  getUser: () => Vaxios.post(url.user)
}
export default {
  install (Vue) {
    Vue.prototype.$axios = api
    Vue.axios = api
  },
  $axios: api
}
export const $axios = api
