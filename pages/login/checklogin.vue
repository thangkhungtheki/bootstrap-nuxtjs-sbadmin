<template>
  
</template>

<script>
export default {
    async asyncData({store, redirect, $axios }) {
        const username = store.state.username;
        const password = store.state.password;
    try {
      const response =  await $axios.$post('http://127.0.0.1:3000/express/dangnhap',{
        username: username,
        password: password
      })
      .then(data=>{
        if(!data.loi){
           console.log(data)
            redirect('/user')
        }else{
            console.log('sai pass')
            redirect('/login')
        }
       
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