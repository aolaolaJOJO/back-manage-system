const express = require('express')
const Router = express.Router()
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)


app.use(bodyParser.json())
Router.get('/list', function(req, res){
  	res.json({'name': '123'})
})

app.use('/user', Router)
/*创建一个web服务器-链式调用*/
server.listen(1234, function() {
    console.log('server start');
})
