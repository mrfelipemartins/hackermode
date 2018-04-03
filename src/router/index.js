import Vue from 'vue'
import Router from 'vue-router'
import Invite from '@/components/Invite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Invite
    }
  ]
})
