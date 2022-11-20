import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    },
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('user') == null) {
      next({ name: 'login' })
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})



export default router
