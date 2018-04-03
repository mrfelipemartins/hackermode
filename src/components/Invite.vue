<template>
  <div class="columns is-desktop is-vcentered">
    <div class="column is-4 is-offset-4">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Código de Convite
            </h1>
            <h2 class="subtitle">
              Você pode hackear o seu próprio código.
            </h2>
          </div>
        </div>
      </section>
      <b-notification type="is-danger" v-if="codeFailed">
          O código fornecido é inválido. Tente novamente.
      </b-notification>
      <div class="box">
        <div class="field">
          <label class="label">Digite o seu código</label>
          <div class="control">
            <input class="input" type="text" placeholder="" v-model="inviteCode">
          </div>
        </div>
        <a :class="(loading) ? 'button is-success is-loading' : 'button is-success'" @click="verifyCode()">Cadastrar</a>
      </div>
      <p>Já possui uma conta? <router-link to="/login">Entre aqui</router-link> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invite',
  data () {
    return {
      inviteCode: '',
      codeFailed: false,
      loading: false
    }
  },
  methods: {
    verifyCode: function () {
      this.loading = true
      alert(this.inviteCode)
      this.loading = false
      this.codeFailed = true
    }
  }
}
</script>
