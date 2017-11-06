import Router from 'vue-router'
import Main from 'pages/main'
import Index from 'pages/index'
import Community from 'pages/community'
import Service from 'pages/service'
import Me from 'pages/me'
const Test = resolve => require(['../pages/test.vue'], resolve)
const Register = resolve => require(['../pages/register.vue'], resolve)
const ArticleList = resolve => require(['../pages/articleList.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
        path: 'index',
        component: Index,
        name: 'index'
      }, {
        path: 'community',
        component: Community,
        name: 'community'
      }, {
        path: 'service',
        component: Service,
        name: 'service'
      }, {
        path: 'me',
        component: Me,
        name: 'me'
      }]
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    },
    {
      path: '/articleList',
      component: ArticleList,
      name: 'articleList'
    },
    {
      path: '/test',
      component: Test,
      name: 'test'
    }
  ]
})
