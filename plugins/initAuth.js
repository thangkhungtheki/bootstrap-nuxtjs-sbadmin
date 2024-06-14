
const Cookies = require('js-cookie') 

export default function ({ store }) {
  console.log('>>>Plugin Middleware initAuth')
  // if (process.client) {
    const token = Cookies.get('token')
    if (token) {
      store.commit('cookies/SET_TOKEN', token)
      //console.log(store.state.cookies.token)
    }
  // }
}