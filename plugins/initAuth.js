
const Cookies = require('js-cookie') 

export default async function ({ store , route }) {
 
  console.log('>>>Plugin toàn cục lấy token add vào state token initAuth')
  const path = route?.path
  console.log(path)
  
    const token =  Cookies.get('token')
    if (token) {
      
      await store.commit('cookies/SET_TOKEN', token)
      await store.commit('cookies/SET_BEFORCE_PATH', 'hahahaha')
      //console.log(store.state.cookies.token)
    } 
  
} 