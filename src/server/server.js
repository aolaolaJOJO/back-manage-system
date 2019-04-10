const express = require('express')
const Router = express.Router()
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)

const model = require('./model')
const User = model.getModel('user')
app.use(bodyParser.json())

// var mongoose = require('mongoose')
// mongoose.deleteModel('user');
// 登录
Router.post('/login', function(req, res) {
    const {
        user,
        pwd
    } = req.body
    User.findOne({
        user: user,
        pwd: pwd
    }, function(err, adventure) {
        if (adventure) {
            return res.json({
                code: 0,
                msg: '登录成功！'
            })
        } else {
            return res.json({
                code: -1,
                msg: '用户名或者密码错误！'
            })
        }
    })
})
// 注册
Router.post('/register', function(req, res) {
    const {
        user,
        pwd
    } = req.body
    const userModel = new User({
        user,
        pwd
    })
    User.find({
        user: user
    }, function(err, docs) {
        if (!err && docs.length >= 1) {
            return res.json({
                code: -1,
                msg: '该用户已被注册！'
            })
        }
        userModel.save(function(e, d) {
            if (e) {
                return res.json({
                    code: 1,
                    msg: '后端出错了'
                })
            }
            const {
                user,
                pwd,
                _id
            } = d
            return res.json({
                code: 0,
                data: {
                    msg: '恭喜您注册成功！',
                    user,
                    pwd,
                    _id
                }
            })
        })
    })
    // res.json({'name': '123'})
})
// 查询用户列表
Router.get('/list', function(req, res) {
    User.find({}, function(err, docs) {
        return res.json({
            code: 0,
            data: docs
        })
    })
})
// 删除
Router.post('/delete', function(req, res) {
    const {
        user
    } = req.body
    User.deleteMany({
        user: user
    }, function(err, docs) {
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