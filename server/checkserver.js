const axios = require('axios')
export default async function (req, res, next) {
    // Đơn giản là gửi lại một JSON response
    const response = await axios.post('http://127.0.0.1:4000/jwt', {
        username: 'dtan',
        password: 'qeqeqeqe'
        })
        console.log(Object.keys(req))
    // req.store.token = data.token,
    
    next()
    }