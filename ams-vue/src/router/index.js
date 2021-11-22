import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Reginster from '../components/register.vue'
import Index from '../components/index.vue'
import we from '../components/welocme.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Reginster },
    { path: '/index', component: Index, redirect: '/we', children: [{ path: '/we', component: we }] }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') return next()
  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) return next('./login')
  next()
}
)

export default router
