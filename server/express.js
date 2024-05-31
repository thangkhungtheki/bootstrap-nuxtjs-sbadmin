const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.get('/getJSON', (req, res, next) => {
  console.log('[Server Middleware express]')
  let a = req.query.id
  let b  = req.query.pass
  console.log('[Server Middleware params query] ',a)
  console.log('[Server Middleware params query] ',b)
  res.send('test middleware express')
  next()
})

module.exports = app