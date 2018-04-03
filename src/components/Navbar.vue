<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          hacker<span class="small">mode</span>
        </a>

        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            [ home ]
          </router-link>
          <router-link class="navbar-item" to="/register">
            [ cadastro ]
          </router-link>
          <router-link to="/about" class="navbar-item">
            [ sobre ]
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>
