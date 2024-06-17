const Cookies = require('js-cookie') 

export default async function(context){
    //console.log(Object.keys(context))
    //console.log(context.store)
    const token =  Cookies.get('token')
    if ( !context.store.state.cookies.token ){
        await context.store.commit('cookies/SET_TOKEN', token)
        // context.redirect('/user')
    }
}