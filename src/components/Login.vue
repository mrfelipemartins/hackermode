<template>
  <div class="columns is-desktop is-vcentered">
    <div class="column is-4 is-offset-4">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Acessar
            </h1>
            <h2 class="subtitle">
              Digite suas credenciais.
            </h2>
          </div>
        </div>
      </section>
      <b-notification type="is-danger" v-if="error" :closeable="false">
          {{errorMessage}}
      </b-notification>
      <b-notification type="is-success" v-if="success" :closeable="false">
          Pronto. Você será redirecionado.
      </b-notification>
      <div class="box">
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input class="input" type="text" placeholder="" v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="">
          </div>
        </div>
        <a :class="(loading) ? 'button is-success is-loading' : 'button is-success'" @click="signIn()">Entrar</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      email: '',
      password: '',
      success: false,
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    login: function () {
      this.$router.replace('me')
    },
    signIn: function () {
      var _this = this
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (err, user) {
          if (err) {
            _this.error = true
            _this.success = false
            _this.errorMessage = err.message
            _this.loading = false
          } else {
            _this.success = true
            _this.error = false
            _this.loading = false
          }
        },
        function (err) {
          _this.error = true
          _this.success = false
          _this.errorMessage = err.message
          _this.loading = false
        }
      )
    }
  }
}
</script>
