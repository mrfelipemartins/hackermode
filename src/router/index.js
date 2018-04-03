import Vue from 'vue'
import Router from 'vue-router'
import Invite from '@/components/Invite'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/join',
      name: 'Invite',
      component: Invite
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Regsiter',
      component: Register
    }
  ]
})
