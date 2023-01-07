import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUserData from '../components/view-user-data.vue';
import UserData from "../components/user-data.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewUserData',
    component: ViewUserData
  },
	{
		path:'/userData',
		name:'UserData',
		component:UserData,
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
