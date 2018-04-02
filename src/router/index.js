import Vue from 'vue'
import Router from 'vue-router'
import Invite from '@/components/Invite'
import Navbar from '@/components/Navbar'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import '@/assets/css/main.scss'
import VueParticles from 'vue-particles'

Vue.use(Router)
Vue.use(Buefy)
Vue.component('app-navbar', Navbar)
Vue.use(VueParticles)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Invite
    }
  ]
})
