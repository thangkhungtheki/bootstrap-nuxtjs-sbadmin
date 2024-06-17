
const Cookies = require('js-cookie') 

export default async function ({ store , route , redirect}) {
 
  console.log('>>>Plugin toàn cục lấy token add vào state token initAuth')
 
  
  
    const token =  Cookies.get('token')
    console.log(token)
    if (token !=='undefined' || token !==null) {
      
      await store.commit('cookies/SET_TOKEN', token)
      await store.commit('cookies/SET_BEFORCE_PATH', 'hahahaha')
      console.log(route)
      redirect('/home')
      //console.log(store.state.cookies.token)
    } else {
      redirect('/login')
    }
  
} 