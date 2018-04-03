// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'buefy/lib/buefy.css'
import '@/assets/css/main.scss'
import Vue from 'vue'
import App from './App'
import VueSocketIO from 'vue-socket.io'
import router from './router'
import Navbar from '@/components/Navbar'
import Buefy from 'buefy'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueParticles)
Vue.component('app-navbar', Navbar)
Vue.use(VueSocketIO, 'http://localhost:3000')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
