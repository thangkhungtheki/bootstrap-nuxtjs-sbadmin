<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="xlogin.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="xlogin.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { state } from '~/store'
export default {
  data() {
    return {
      xlogin: {
        username: '',
        password: ''
      }
    }
  },
  created(){

  },
  computed: {
    ...mapState({
      token: state => state.cookie.token,
      stateCouter: state => state.device.couterstate,
      
      
  }),
  },
  methods: {
    ...mapActions({
      actUser: 'ActUser',
      'login': 'cookies/onlogin'
  }),
    async userLogin() {
    this.actUser(this.xlogin)
    try {
        const response = await this.$axios.post('http://127.0.0.1:3000/express/dangnhap', {
            username: this.xlogin.username,
            password: this.xlogin.password
        })
        
        this.login(response.data.token)
        this.$router.push('/user');
        console.log(response.data)
        
        

      } catch (error) {
        console.log(error)
        this.$router.push('/login')
      }
    
    // this.$store.commit('setUsername', this.login.username);
    // this.$store.commit('setPassword', this.login.password);
    // this.$store.dispatch('setUsername', this.login.username);
    // this.$store.dispatch('setPassword', this.login.password);
    }
  }
}

</script>