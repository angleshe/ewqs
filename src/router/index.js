import VueRouter from 'vue-router'
import Index from '../App.vue'
const router = new VueRouter({
	routes:[
		{
			path:'/',
			name:'Index',
			component:Index
		}
	]
})
export default router