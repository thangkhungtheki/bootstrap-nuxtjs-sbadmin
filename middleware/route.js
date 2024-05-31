const axios = require('axios')
export default async function() {
    //let result = axios('http://127.0.0.1:3000/express/getJSON?id=123456&pass=abcdef')
    let result = await axios.get('http://127.0.0.1:3000/express/getJSON',{
        params: {
            id: '123456',
            pass:'abcdef'
        }
    })
    console.log('[Middlware Router call express] ',result.data)
    console.log('[Middleware Router]')
}