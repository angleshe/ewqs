import VueRouter from 'vue-router'
const Index=resolve=>require(['../pages/App.vue'],resolve)
const Register=resolve=>require(['../pages/register.vue'],resolve)
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'Index',
			component:Index
		},
		{
			path:'/register',
			name:'register',
			component:Register
		}
	]
})
export default router