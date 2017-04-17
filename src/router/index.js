import VueRouter from 'vue-router'
const Index=resolve=>require(['../pages/App.vue'],resolve)
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'Index',
			component:Index
		}
	]
})
export default router