<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actUser: 'ActUser'
    }),
     userLogin() {
      this.actUser(this.login)
      // this.$store.commit('setUsername', this.login.username);
      // this.$store.commit('setPassword', this.login.password);
      // this.$store.dispatch('setUsername', this.login.username);
      // this.$store.dispatch('setPassword', this.login.password);
      this.$router.push('/login/checklogin')
  
    }
  }
}
</script>