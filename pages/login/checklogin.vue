<template>
  
</template>

<script>
export default {
    async asyncData({store, redirect, $axios }) {
        const username = store.state.username;
        const password = store.state.password;
    try {
      const response =  await $axios.$post('http://127.0.0.1:4000/jwt',{
        username: username,
        password: password
      })
      .then(data=>{
        console.log(data)
        redirect('/user')
      })
      
    } catch (error) {
      console.log(error)
      redirect('/login')
    }

  },
}
</script>

<style>

</style>