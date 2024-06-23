

const Cookies = require('js-cookie') 

export default function(context){
    // console.log(Object.keys(context.req.headers))
    if(process.server){
        // console.log(context.req.headers.cookie)
        if(context.req.headers.cookie){
            const token1 = context.req.headers.cookie.split("=")
            const token = token1[1].split(/;/g)
        // const cookserver = JSON.parse(context.req.headers.cookie)
        // console.log(token1)
            context.store.state.cookies.token = token[0]
            context.store.state.cookies.username = token1[2]
        // console.log(context.store.state.cookies.token)
        // console.log(context.store.state.cookies.username)
        }
        
    }
    
}