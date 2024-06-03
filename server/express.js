const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')

app.use(bodyParser.json())
app.get('/getJSON', (req, res, next) => {
  console.log('[Server Middleware express]')
  let a = req.query.id
  let b  = req.query.pass
  // console.log('[Server Middleware params query] ',a)
  // console.log('[Server Middleware params query] ',b)
  res.send('test middleware express')
  next()
})
app.post('/dangnhap', async(req, res, next) => {
  console.log('[Server Middleware express] >>> đăng nhập')
  let id = req.body.username
  let pass  = req.body.password
  try {
     const result = await axios.post('http://127.0.0.1:4000/jwt',{
    username: id,
    password: pass
  })
  if(result.data){
    console.log(result.data)
    res.json(result.data)
  }else{
    
  }
  
  } catch (error) {
    res.json({
      loi: 401
    })
  }
  next()
  
})
module.exports = app