const express = require('express')
const Router = express.Router()
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)

const model = require('./model')
const Man = model.getModel('man')
app.use(bodyParser.json())
Router.post('/register', function(req, res){
	const {
        name,
        age,
        height,
        sex
    } = req.body
	console.log(req.body)
	const manModel = new Man({
        name,
        age,
        sex,
        height
    })
    manModel.save(function(e, d) {
       if (e) {
            return res.json({
                code: 1,
                msg: '后端出错了'
            })
        }
        const {
            name,
            _id
        } = d
        console.log('这是'+d)
       	return res.json({
            code: 0,
            data: {
                name,
		        age,
		        sex,
		        height,
                _id
            }
        })
    })
    // res.json({'name': '123'})
})
Router.get('/list', function(req, res){
    Man.find({ }, function (err, docs) { 
        return res.json({
            code: 0,
            data: docs
        })
    })
})
Router.post('/delete', function(req, res){
    const {
        name
    } = req.body
    Man.deleteMany({name: name}, function (err, docs) { 
        return res.json({
            code: 0,
            data: docs
        })
    })
})
app.use('/user', Router)
/*创建一个web服务器-链式调用*/
server.listen(1234, function() {
    console.log('server start');
})
