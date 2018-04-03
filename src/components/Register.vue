<template>
  <div class="columns is-desktop is-vcentered">
    <div class="column is-4 is-offset-4">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Cadastrar
            </h1>
            <h2 class="subtitle">
              Preencha os dados corretamente
            </h2>
          </div>
        </div>
      </section>
      <b-notification type="is-danger" v-if="error">
          {{errorMessage}}
      </b-notification>
      <b-notification type="is-success" v-if="success">
          Você foi cadastrado com sucesso.
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
            <input class="input" type="password" placeholder="" v-model="password">
          </div>
        </div>
        <a :class="(loading) ? 'button is-success is-loading' : 'button is-success'" @click="signUp()">Cadastrar</a>
      </div>
      <p>Já possui uma conta? <router-link to="/login">Entre aqui</router-link> </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Register',
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
    signUp: function () {
      this.loading = true
      var _this = this
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (err, data) {
          if (err) {
            _this.error = true
            _this.errorMessage = err.message
          }
          _this.success = true
        },
        function (err) {
          _this.error = true
          _this.errorMessage = err.message
          _this.loading = false
        }
      )
    }
  }
}
</script>
