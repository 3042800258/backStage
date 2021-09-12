import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/myLogin.vue'
import Home from '@/components/myHome.vue'
Vue.use(VueRouter)
const routers = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

export default routers
