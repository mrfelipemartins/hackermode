// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'buefy/lib/buefy.css'
import '@/assets/css/main.scss'
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
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

let app
let config = {
  apiKey: 'AIzaSyDQ73pcIAI_3I9msZnFdu8C7b34hw5IL9s',
  authDomain: 'hackermode-b711d.firebaseapp.com',
  databaseURL: 'https://hackermode-b711d.firebaseio.com',
  projectId: 'hackermode-b711d',
  storageBucket: 'hackermode-b711d.appspot.com',
  messagingSenderId: '669374713253'
}

/* eslint-disable no-new */
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
