import Vue from 'vue'
import Router from 'vue-router'
import Trisongulate from '@/components/Trisongulate'
import Login from '@/components/Login'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/trisongulate',
    name: 'trisongulate',
    component: Trisongulate
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
  ]
})
