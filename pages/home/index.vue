<template>
  <div>
    <h1>Chào mừng đến trang chủ</h1>
    <h1>{{ token ? token : 'Chưa đăng nhập'}}</h1>
    <div>
        <b-button variant="success" @click="handledangnhap">Đăng nhập</b-button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    // layout: 'areaAdmin',
    // middleware: 'authhome'
    computed: {
    ...mapState({
      token: state => state.cookies.token,
      stateCouter: state => state.device.couterstate,
    })
    },

    methods: {
        handledangnhap(){
            if(this.token){
                this.$router.push('/user')
            }else{
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style>

</style>