
const Cookies = require('js-cookie') 

export default function ({ store , route }) {
  console.log('>>>Plugin Middleware initAuth')
  const path = route?.path
  console.log(path ? path : null)
  if (process.client) {
    const token = Cookies.get('token')
    if (token) {
      
      store.commit('cookies/SET_TOKEN', token)
      store.commit('cookies/SET_BEFORCE_PATH', 'hahahaha')
      //console.log(store.state.cookies.token)
    } 
  }
}