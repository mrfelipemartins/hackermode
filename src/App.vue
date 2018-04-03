<template>
  <div id="app">
    <app-navbar/>
    <div class="container" id="main">
      <router-view/>
    </div>
    <vue-particles color="#058000" linesColor="#058000" :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"></vue-particles>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isConnected: false
    }
  },
  sockets: {
    connect () {
      this.isConnected = true
    },
    disconnect () {
      this.isConnected = false
    }
  }
}
</script>
